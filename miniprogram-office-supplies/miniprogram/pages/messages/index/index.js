const api = require('../../../../services/api');
const { requireLogin } = require('../../../../utils/auth');
const { randomRequestId } = require('../../../../utils/http');

function formatDate(ts) {
  if (!ts) return '-';
  const date = new Date(ts);
  const p = (n) => String(n).padStart(2, '0');
  return `${date.getMonth() + 1}-${p(date.getDate())} ${p(date.getHours())}:${p(date.getMinutes())}`;
}

Page({
  data: {
    messages: []
  },

  async onShow() {
    const user = requireLogin(this);
    if (!user) return;
    await this.loadData();
  },

  async loadData() {
    try {
      const res = await api.notify.listMine({ pageNo: 1, pageSize: 100 });
      this.setData({
        messages: (res.items || []).map((item) => ({
          ...item,
          createdAtText: formatDate(item.createdAt)
        }))
      });
    } catch (error) {
      wx.showToast({ title: error.message || '加载消息失败', icon: 'none' });
    }
  },

  async onRead(e) {
    const id = e.currentTarget.dataset.id;
    const target = this.data.messages.find((msg) => msg._id === id);
    if (!target || target.readAt) return;

    try {
      await api.notify.read(id, randomRequestId('msg_read'));
      await this.loadData();
    } catch (error) {
      wx.showToast({ title: error.message || '读取失败', icon: 'none' });
    }
  }
});
