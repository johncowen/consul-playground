import Adapter from './application';
import { get } from '@ember/object';
export default Adapter.extend({
  // ieuu, private..
  // ajaxOptions() {
  //   const hash = this._super(...arguments);
  //   hash.data = this.adapterOptions;
  //   this.adapterOptions = null;
  //   return hash;
  // },
  // buildURL: function (type, id, snapshot, queryType, query) {
  //   // if (queryType === 'queryRecord' && query.__id__) {
  //   //   url += '/' + query.__id__;
  //   //   query.__id__ = null;
  //   //   delete query.__id__;
  //   // }
  //   // return url;
  //   console.log("BUILDURL");
  //   return this._super(...arguments);
  // },
  urlForFindAll() {
    return `/${this.namespace}/internal/ui/services`;
  },
  urlForFindRecord(id, modelName) {
    return `/${this.namespace}/health/service/${id}`;
  },
  // findAll: function(store, modelClass, sinceToken, snapshotRecordArray) {
  //   // this.adapterOptions = snapshotRecordArray.adapterOptions;
  //   return this._super(...arguments);
  // }
});
