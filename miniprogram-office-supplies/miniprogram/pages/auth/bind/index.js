const api = require('../../../services/api');
const { setUser } = require('../../../utils/auth');
const { randomRequestId } = require('../../../utils/http');

Page({
  data: {
    employeeCode: '',
    mobileLast4: '',
    loading: false
  },

  onEmployeeCodeInput(e) {
    this.setData({ employeeCode: (e.detail.value || '').trim().toUpperCase() });
  },

  onMobileInput(e) {
    this.setData({ mobileLast4: (e.detail.value || '').trim() });
  },

  async onBind() {
    const { employeeCode, mobileLast4 } = this.data;
    if (!employeeCode || mobileLast4.length !== 4) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' });
      return;
    }

    this.setData({ loading: true });
    try {
      const data = await api.auth.bindEmployee({
        employeeCode,
        mobileLast4,
        requestId: randomRequestId('bind')
      });
      const user = {
        employeeId: data.employeeId,
        employeeCode: data.employeeCode,
        name: data.name,
        department: data.department,
        role: data.role,
        token: data.token
      };
      setUser(user);
      getApp().globalData.user = user;
      getApp().globalData.role = user.role;
      wx.switchTab({ url: '/pages/home/index/index' });
    } catch (error) {
      wx.showToast({ title: error.message || '绑定失败', icon: 'none' });
    } finally {
      this.setData({ loading: false });
    }
  }
});
