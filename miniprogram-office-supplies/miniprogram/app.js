App({
  globalData: {
    user: null,
    role: 'GUEST'
  },

  onLaunch() {
    if (!wx.cloud) {
      console.error('wx.cloud is not available in this base library');
      return;
    }

    wx.cloud.init({
      env: 'replace-with-your-env-id',
      traceUser: true
    });

    const cachedUser = wx.getStorageSync('user');
    if (cachedUser) {
      this.globalData.user = cachedUser;
      this.globalData.role = cachedUser.role || 'EMPLOYEE';
    }
  }
});
