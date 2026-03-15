const api = require('../../../../services/api');
const { requireAdmin } = require('../../../../utils/auth');
const { randomRequestId } = require('../../../../utils/http');

function initialForm() {
  return {
    code: '',
    name: '',
    category: '',
    unit: '个',
    unitPrice: '0',
    initialStock: '0',
    isControlled: false
  };
}

Page({
  data: {
    form: initialForm(),
    items: []
  },

  async onShow() {
    const user = requireAdmin(this);
    if (!user) return;
    await this.loadData();
  },

  onFormInput(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({ [`form.${field}`]: e.detail.value || '' });
  },

  onControlledChange(e) {
    this.setData({ 'form.isControlled': !!e.detail.value });
  },

  async onSave() {
    const payload = {
      ...this.data.form,
      unitPrice: Number(this.data.form.unitPrice || 0),
      initialStock: Number(this.data.form.initialStock || 0),
      minStock: 0,
      maxStock: 100000,
      status: 'ACTIVE'
    };
    if (!payload.code || !payload.name || !payload.category) {
      wx.showToast({ title: '编码/名称/品类必填', icon: 'none' });
      return;
    }

    try {
      await api.item.upsert(payload, randomRequestId('item_upsert'));
      wx.showToast({ title: '保存成功', icon: 'success' });
      this.setData({ form: initialForm() });
      await this.loadData();
    } catch (error) {
      wx.showToast({ title: error.message || '保存失败', icon: 'none' });
    }
  },

  async loadData() {
    try {
      const res = await api.item.list({ pageNo: 1, pageSize: 200, status: 'ACTIVE' });
      this.setData({ items: res.items || [] });
    } catch (error) {
      wx.showToast({ title: error.message || '加载物资失败', icon: 'none' });
    }
  }
});
