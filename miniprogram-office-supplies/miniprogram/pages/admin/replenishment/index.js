const api = require('../../../../services/api');
const { requireAdmin } = require('../../../../utils/auth');
const { randomRequestId } = require('../../../../utils/http');

Page({
  data: { list: [] },

  async onShow() {
    const user = requireAdmin(this);
    if (!user) return;
    await this.loadData();
  },

  async loadData() {
    try {
      const res = await api.alert.lowStockList({ includeSuggestions: true, pageNo: 1, pageSize: 200 });
      this.setData({ list: res.suggestions || [] });
    } catch (error) {
      wx.showToast({ title: error.message || '加载建议失败', icon: 'none' });
    }
  },

  async markDone(e) {
    try {
      await api.alert.markSuggestion({ id: e.currentTarget.dataset.id, status: 'DONE' }, randomRequestId('replenish_done'));
      wx.showToast({ title: '已更新', icon: 'success' });
      await this.loadData();
    } catch (error) {
      wx.showToast({ title: error.message || '更新失败', icon: 'none' });
    }
  }
});
