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
      const res = await api.stock.getSnapshot({ pageNo: 1, pageSize: 100, approvedOnly: true });
      this.setData({ list: res.approvedRequisitions || [] });
    } catch (error) {
      wx.showToast({ title: error.message || '加载失败', icon: 'none' });
    }
  },

  async onPick(e) {
    const requisitionId = e.currentTarget.dataset.id;
    try {
      await api.stock.pick({ requisitionId }, randomRequestId('pick'));
      wx.showToast({ title: '已出库', icon: 'success' });
      await this.loadData();
    } catch (error) {
      wx.showToast({ title: error.message || '出库失败', icon: 'none' });
    }
  }
});
