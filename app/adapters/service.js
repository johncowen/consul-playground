import Adapter from './application';
export default Adapter.extend({
  findRecord() {
    return this._super(...arguments);
  },
  urlForFindRecord(id, modelName) {
    return `/${this.namespace}/health/service/${id}`;
  }
});
