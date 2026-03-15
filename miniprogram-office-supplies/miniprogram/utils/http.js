function normalizeError(err) {
  if (!err) {
    return 'Unknown error';
  }
  if (typeof err === 'string') {
    return err;
  }
  return err.message || err.errMsg || JSON.stringify(err);
}

function randomRequestId(prefix = 'req') {
  return [prefix, Date.now(), Math.floor(Math.random() * 1000000)].join('_');
}

function invoke(functionName, payload = {}) {
  return wx.cloud.callFunction({
    name: functionName,
    data: payload
  }).then((res) => {
    const result = res.result || {};
    if (result.code !== 0) {
      throw new Error(result.message || 'Cloud function failed');
    }
    return result.data;
  }).catch((err) => {
    throw new Error(normalizeError(err));
  });
}

module.exports = {
  invoke,
  randomRequestId
};
