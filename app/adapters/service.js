import Adapter from './application';
import { assign } from '@ember/polyfills';
import { typeOf } from '@ember/utils';

// lets float this:
// Adapter is essentially a singleton
// _data should be truly private
const _data = [];
export default Adapter.extend({
  // not great but avoids private
  // happier for the moment
  dataForRequest: function(params) {
    params.query = assign(
      {},
      params.query, // this can be null
      this.getDataFor(params.requestType)
    );
    return this._super(params);
  },
  setDataFor(requestName, data) {
    _data[requestName] = data;
  },
  getDataFor(requestName, data) {
    if(typeOf(_data[requestName]) === "undefined") {
      return {};
    }
    return _data[requestName];
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
