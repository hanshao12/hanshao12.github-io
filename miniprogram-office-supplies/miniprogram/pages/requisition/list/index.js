const api = require('../../../../services/api');
const { requireLogin } = require('../../../../utils/auth');
const { randomRequestId } = require('../../../../utils/http');

function formatDate(ts) {
  if (!ts) return '-';
  const date = new Date(ts);
  const p = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())} ${p(date.getHours())}:${p(date.getMinutes())}`;
}

Page({
  data: {
    list: []
  },

  async onShow() {
    const user = requireLogin(this);
    if (!user) return;
    await this.loadData();
  },

  async loadData() {
    try {
      const res = await api.requisition.listMine({ pageNo: 1, pageSize: 50 });
      const list = (res.items || []).map((item) => ({
        ...item,
        createdAtText: formatDate(item.createdAt)
      }));
      this.setData({ list });
    } catch (error) {
      wx.showToast({ title: error.message || '加载失败', icon: 'none' });
    }
  },

  async confirmComplete(e) {
    const id = e.currentTarget.dataset.id;
    try {
      await api.requisition.complete(id, randomRequestId('rq_complete'));
      wx.showToast({ title: '已确认收货', icon: 'success' });
      await this.loadData();
    } catch (error) {
      wx.showToast({ title: error.message || '操作失败', icon: 'none' });
    }
  }
});
