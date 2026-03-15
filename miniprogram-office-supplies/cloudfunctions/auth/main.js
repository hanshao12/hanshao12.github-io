const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();

function ok(data) {
  return { code: 0, message: 'ok', data };
}

function fail(message, details) {
  return { code: 1, message, details: details || null };
}

async function findEmployeeByOpenId(openid) {
  const res = await db.collection('employees').where({ openid }).limit(1).get();
  return (res.data || [])[0] || null;
}

async function checkIdempotent(requestId, action, operatorOpenId) {
  if (!requestId) return null;
  const res = await db.collection('operation_logs').where({
    requestId,
    action,
    operatorOpenId,
    status: 'SUCCESS'
  }).limit(1).get();
  return (res.data || [])[0] || null;
}

async function logOperation({ requestId, action, operatorOpenId, status, result, error }) {
  await db.collection('operation_logs').add({
    data: {
      requestId: requestId || '',
      action,
      operatorOpenId,
      status,
      result: result || null,
      error: error || null,
      createdAt: Date.now()
    }
  });
}

exports.main = async (event) => {
  const action = event.action;
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;

  try {
    if (action === 'bindEmployee') {
      const requestId = event.requestId;
      const cached = await checkIdempotent(requestId, action, openid);
      if (cached) {
        return ok(cached.result);
      }

      const employeeCode = (event.employeeCode || '').trim().toUpperCase();
      const mobileLast4 = (event.mobileLast4 || '').trim();
      if (!employeeCode || mobileLast4.length !== 4) {
        return fail('employeeCode and mobileLast4 are required');
      }

      const found = await db.collection('employees').where({ employeeCode }).limit(1).get();
      const employee = (found.data || [])[0];
      if (!employee) {
        return fail('Employee not found');
      }
      if (employee.status !== 'ACTIVE') {
        return fail('Employee is not active');
      }

      const mobile = String(employee.mobile || '');
      if (!mobile.endsWith(mobileLast4)) {
        return fail('Mobile validation failed');
      }

      await db.collection('employees').doc(employee._id).update({
        data: {
          openid,
          updatedAt: Date.now()
        }
      });

      const data = {
        token: Buffer.from(`${openid}.${Date.now()}`).toString('base64'),
        employeeId: employee._id,
        employeeCode: employee.employeeCode,
        name: employee.name,
        department: employee.department,
        role: employee.role || 'EMPLOYEE'
      };

      await logOperation({
        requestId,
        action,
        operatorOpenId: openid,
        status: 'SUCCESS',
        result: data
      });

      return ok(data);
    }

    if (action === 'me') {
      const employee = await findEmployeeByOpenId(openid);
      if (!employee) {
        return ok(null);
      }
      return ok({
        employeeId: employee._id,
        employeeCode: employee.employeeCode,
        name: employee.name,
        department: employee.department,
        role: employee.role || 'EMPLOYEE'
      });
    }

    return fail(`Unsupported action: ${action}`);
  } catch (error) {
    await logOperation({
      requestId: event.requestId,
      action: action || 'unknown',
      operatorOpenId: openid,
      status: 'FAILED',
      error: error.message
    });
    return fail(error.message);
  }
};
