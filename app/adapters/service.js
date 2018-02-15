import Adapter from './application';
import { assign } from '@ember/polyfills';
import { typeOf } from '@ember/utils';

// lets float this:
// Adapter is essentially a singleton
// _data should be truly private
const _data = {
  'findAll': {
    index: 1,
    wait: '5m'// consul default, should probably eventually leave this up to consul, or possible candidate for other settings
  }
};
export default Adapter.extend({
  // not great but avoids private
  // happier for the moment
  dataForRequest(params) {
    params.query = assign(
      {},
      params.query, // this can be null
      this.getDataFor(params.requestType)
    );
    return this._super(params);
  },
  setDataFor(requestName, data) {
    _data[requestName] = assign({index: _data[requestName].index, wait: _data[requestName].wait}, data);
  },
  getDataFor(requestName) {
    if(typeOf(_data[requestName]) === "undefined") {
      return {};
    }
    return _data[requestName];
  },
  handleResponse(status, headers, payload, requestData) {
    if(status == 200 && headers['x-consul-index']) {
      this.setDataFor('findAll', {index: headers['x-consul-index']});
    }
    return this._super(...arguments);
  },
  urlForFindAll() {
    return `/${this.namespace}/internal/ui/services`;
  },
  urlForFindRecord(id, modelName) {
    return `/${this.namespace}/health/service/${id}`;
  },
  findAll: function(store, modelClass, sinceToken, snapshotRecordArray) {
    // not too bad as find all data is now obligatory
    this.setDataFor('findAll', snapshotRecordArray.adapterOptions || {});
    return this._super(...arguments);
  }
});
