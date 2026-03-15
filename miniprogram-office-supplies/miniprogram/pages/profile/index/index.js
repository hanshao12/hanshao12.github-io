const { requireLogin, clearUser } = require('../../../../utils/auth');

Page({
  data: {
    user: {},
    isAdmin: false
  },

  onShow() {
    const user = requireLogin(this);
    if (!user) return;

    this.setData({
      user,
      isAdmin: user.role === 'ADMIN' || user.role === 'APPROVER'
    });
  },

  toMyRequisitions() {
    wx.navigateTo({ url: '/pages/requisition/list/index' });
  },

  logout() {
    clearUser();
    getApp().globalData.user = null;
    getApp().globalData.role = 'GUEST';
    wx.redirectTo({ url: '/pages/auth/bind/index' });
  }
});
