function getUser() {
  return wx.getStorageSync('user') || null;
}

function setUser(user) {
  wx.setStorageSync('user', user);
}

function clearUser() {
  wx.removeStorageSync('user');
}

function requireLogin(page, redirect = '/pages/auth/bind/index') {
  const user = getUser();
  if (!user) {
    wx.redirectTo({ url: redirect });
    return null;
  }
  return user;
}

function requireAdmin(page) {
  const user = getUser();
  if (!user) {
    wx.redirectTo({ url: '/pages/auth/bind/index' });
    return null;
  }
  if (user.role !== 'ADMIN' && user.role !== 'APPROVER') {
    wx.showToast({ title: '无管理权限', icon: 'none' });
    setTimeout(() => {
      wx.navigateBack({ delta: 1 });
    }, 500);
    return null;
  }
  return user;
}

module.exports = {
  getUser,
  setUser,
  clearUser,
  requireLogin,
  requireAdmin
};
