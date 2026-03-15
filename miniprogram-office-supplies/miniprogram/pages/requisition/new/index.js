const api = require('../../../../services/api');
const { requireLogin } = require('../../../../utils/auth');
const { randomRequestId } = require('../../../../utils/http');

function roundAmount(value) {
  return Number((value || 0).toFixed(2));
}

Page({
  data: {
    items: [],
    purpose: '',
    totalAmount: 0,
    loading: false
  },

  async onShow() {
    const user = requireLogin(this);
    if (!user) return;
    await this.loadItems();
  },

  onPurposeInput(e) {
    this.setData({ purpose: e.detail.value || '' });
  },

  async loadItems() {
    try {
      const res = await api.item.list({ pageNo: 1, pageSize: 200, status: 'ACTIVE' });
      const items = (res.items || []).map((item) => ({
        ...item,
        qty: 0,
        availableStock: item.availableStock || 0
      }));
      this.setData({ items });
    } catch (error) {
      wx.showToast({ title: error.message || '加载物资失败', icon: 'none' });
    }
  },

  adjustQty(e) {
    const itemId = e.currentTarget.dataset.id;
    const step = Number(e.currentTarget.dataset.step || 0);
    const items = this.data.items.map((item) => {
      if (item._id !== itemId) return item;
      const nextQty = Math.max(0, Number(item.qty || 0) + step);
      return { ...item, qty: nextQty };
    });
    this.setData({ items, totalAmount: this.computeTotal(items) });
  },

  onQtyInput(e) {
    const itemId = e.currentTarget.dataset.id;
    const value = Math.max(0, Number(e.detail.value || 0));
    const items = this.data.items.map((item) => item._id === itemId ? { ...item, qty: value } : item);
    this.setData({ items, totalAmount: this.computeTotal(items) });
  },

  computeTotal(items) {
    return roundAmount(items.reduce((sum, item) => sum + Number(item.unitPrice || 0) * Number(item.qty || 0), 0));
  },

  async createAndSubmit() {
    const selected = this.data.items.filter((item) => Number(item.qty || 0) > 0);
    if (!selected.length) {
      wx.showToast({ title: '请至少选择一项物资', icon: 'none' });
      return;
    }

    if (!this.data.purpose.trim()) {
      wx.showToast({ title: '请填写领用用途', icon: 'none' });
      return;
    }

    this.setData({ loading: true });
    try {
      const createRes = await api.requisition.create({
        purpose: this.data.purpose.trim(),
        lines: selected.map((item) => ({
          itemId: item._id,
          qty: Number(item.qty),
          usage: this.data.purpose.trim()
        }))
      }, randomRequestId('rq_create'));

      await api.requisition.submit(createRes.requisitionId, randomRequestId('rq_submit'));
      wx.showToast({ title: '申请已提交', icon: 'success' });
      this.setData({ purpose: '', totalAmount: 0 });
      await this.loadItems();
      setTimeout(() => wx.navigateTo({ url: '/pages/requisition/list/index' }), 300);
    } catch (error) {
      wx.showToast({ title: error.message || '提交失败', icon: 'none' });
    } finally {
      this.setData({ loading: false });
    }
  }
});
