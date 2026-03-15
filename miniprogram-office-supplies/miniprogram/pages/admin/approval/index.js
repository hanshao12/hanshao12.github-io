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
      const res = await api.approval.listPending({ pageNo: 1, pageSize: 100 });
      this.setData({ list: res.items || [] });
    } catch (error) {
      wx.showToast({ title: error.message || '加载审批失败', icon: 'none' });
    }
  },

  async onDecide(e) {
    const { id, action } = e.currentTarget.dataset;
    try {
      await api.approval.decide({ id, action, comment: '' }, randomRequestId('approve'));
      wx.showToast({ title: '处理成功', icon: 'success' });
      await this.loadData();
    } catch (error) {
      wx.showToast({ title: error.message || '审批失败', icon: 'none' });
    }
  }
});
