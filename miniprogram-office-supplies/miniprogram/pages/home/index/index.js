const api = require('../../../../services/api');
const { requireLogin } = require('../../../../utils/auth');

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return '上午好';
  if (hour < 18) return '下午好';
  return '晚上好';
}

Page({
  data: {
    user: {},
    greeting: getGreeting(),
    isAdmin: false,
    items: [],
    lowStock: []
  },

  async onShow() {
    const user = requireLogin(this);
    if (!user) return;

    const isAdmin = user.role === 'ADMIN' || user.role === 'APPROVER';
    this.setData({ user, isAdmin });

    await this.loadItems();
    if (isAdmin) {
      await this.loadLowStock();
    }
  },

  async loadItems() {
    try {
      const res = await api.item.list({ pageNo: 1, pageSize: 8, status: 'ACTIVE' });
      this.setData({ items: (res.items || []).map((item) => ({
        ...item,
        availableStock: item.availableStock == null ? '-' : item.availableStock
      })) });
    } catch (error) {
      wx.showToast({ title: error.message || '加载失败', icon: 'none' });
    }
  },

  async loadLowStock() {
    try {
      const res = await api.alert.lowStockList({ pageNo: 1, pageSize: 5 });
      this.setData({ lowStock: res.items || [] });
    } catch (error) {
      wx.showToast({ title: error.message || '低库存加载失败', icon: 'none' });
    }
  },

  toNewRequisition() {
    wx.switchTab({ url: '/pages/requisition/new/index' });
  }
});
