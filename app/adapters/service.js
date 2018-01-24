import Adapter from './application';
const _super = Adapter.create();
const serviceURL = `${_super.namespace}/health`;
export default Adapter.extend({
  // findAll() {
  //   this.namespace = servicesURL;
  //   return this._super(...arguments);
  // },
  findRecord() {
    this.namespace = serviceURL;
    return this._super(...arguments);
  },
  urlForFindRecord(id, modelName) {
    return `/${this.namespace}/service/${id}`;
  }
});
