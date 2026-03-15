const api = require('../../../../services/api');
const { requireAdmin } = require('../../../../utils/auth');

Page({
  data: {
    snapshot: {
      totalOnHand: 0,
      lowStockCount: 0,
      weeklyOutQty: 0,
      weeklyOutAmount: 0,
      topItems: []
    }
  },

  async onShow() {
    const user = requireAdmin(this);
    if (!user) return;
    await this.loadData();
  },

  async loadData() {
    try {
      const snapshot = await api.stock.getSnapshot({ includeMetrics: true });
      this.setData({ snapshot });
    } catch (error) {
      wx.showToast({ title: error.message || '加载报表失败', icon: 'none' });
    }
  }
});
