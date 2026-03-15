const api = require('../../../../services/api');
const { requireAdmin } = require('../../../../utils/auth');
const { randomRequestId } = require('../../../../utils/http');

Page({
  data: {
    config: {
      approvalAmountThreshold: 100,
      controlledCategoriesText: '外设,耗材'
    }
  },

  async onShow() {
    const user = requireAdmin(this);
    if (!user) return;
    await this.loadConfig();
  },

  onConfigInput(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({ [`config.${field}`]: e.detail.value || '' });
  },

  async loadConfig() {
    try {
      const cfg = await api.item.configGet();
      this.setData({
        config: {
          approvalAmountThreshold: cfg.approvalAmountThreshold || 100,
          controlledCategoriesText: (cfg.controlledCategories || []).join(',')
        }
      });
    } catch (error) {
      wx.showToast({ title: error.message || '加载配置失败', icon: 'none' });
    }
  },

  async onSave() {
    const payload = {
      approvalAmountThreshold: Number(this.data.config.approvalAmountThreshold || 100),
      controlledCategories: (this.data.config.controlledCategoriesText || '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
    };

    try {
      await api.item.configSet(payload, randomRequestId('config_set'));
      wx.showToast({ title: '配置已保存', icon: 'success' });
    } catch (error) {
      wx.showToast({ title: error.message || '保存失败', icon: 'none' });
    }
  }
});
