const api = require('../../../../services/api');
const { requireAdmin } = require('../../../../utils/auth');
const { randomRequestId } = require('../../../../utils/http');

Page({
  data: { items: [] },

  async onShow() {
    const user = requireAdmin(this);
    if (!user) return;
    await this.loadData();
  },

  async loadData() {
    try {
      const res = await api.alert.lowStockList({ pageNo: 1, pageSize: 200 });
      this.setData({ items: res.items || [] });
    } catch (error) {
      wx.showToast({ title: error.message || '加载失败', icon: 'none' });
    }
  },

  async generate() {
    try {
      const res = await api.alert.generateReplenishment(randomRequestId('replenish_gen'));
      wx.showToast({ title: `已生成 ${res.count || 0} 条`, icon: 'success' });
      await this.loadData();
    } catch (error) {
      wx.showToast({ title: error.message || '生成失败', icon: 'none' });
    }
  }
});
