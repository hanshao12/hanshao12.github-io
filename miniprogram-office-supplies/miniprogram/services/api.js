const { invoke } = require('../utils/http');

module.exports = {
  auth: {
    bindEmployee(data) {
      return invoke('auth', { action: 'bindEmployee', ...data });
    },
    me() {
      return invoke('auth', { action: 'me' });
    }
  },

  item: {
    list(query = {}) {
      return invoke('item', { action: 'list', query });
    },
    upsert(payload, requestId) {
      return invoke('item', { action: 'upsert', payload, requestId });
    },
    importExcel(fileId, requestId) {
      return invoke('item', { action: 'importExcel', fileId, requestId });
    },
    configGet() {
      return invoke('item', { action: 'configGet' });
    },
    configSet(config, requestId) {
      return invoke('item', { action: 'configSet', config, requestId });
    }
  },

  requisition: {
    create(payload, requestId) {
      return invoke('requisition', { action: 'create', payload, requestId });
    },
    submit(id, requestId) {
      return invoke('requisition', { action: 'submit', id, requestId });
    },
    listMine(query = {}) {
      return invoke('requisition', { action: 'listMine', query });
    },
    complete(id, requestId) {
      return invoke('requisition', { action: 'complete', id, requestId });
    }
  },

  approval: {
    listPending(query = {}) {
      return invoke('approval', { action: 'listPending', query });
    },
    decide(payload, requestId) {
      return invoke('approval', { action: 'decide', payload, requestId });
    }
  },

  stock: {
    pick(payload, requestId) {
      return invoke('stock', { action: 'pick', payload, requestId });
    },
    adjust(payload, requestId) {
      return invoke('stock', { action: 'adjust', payload, requestId });
    },
    getSnapshot(query = {}) {
      return invoke('stock', { action: 'getSnapshot', query });
    }
  },

  alert: {
    lowStockList(query = {}) {
      return invoke('alert', { action: 'lowStockList', query });
    },
    generateReplenishment(requestId) {
      return invoke('alert', { action: 'generateReplenishment', requestId });
    },
    markSuggestion(payload, requestId) {
      return invoke('alert', { action: 'markSuggestion', payload, requestId });
    }
  },

  notify: {
    send(payload, requestId) {
      return invoke('notify', { action: 'send', payload, requestId });
    },
    listMine(query = {}) {
      return invoke('notify', { action: 'listMine', query });
    },
    read(id, requestId) {
      return invoke('notify', { action: 'read', id, requestId });
    }
  }
};
