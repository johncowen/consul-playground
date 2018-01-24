import Adapter from './application';
const _super = Adapter.create();
const servicesURL = `${_super.namespace}/internal/ui`;
const serviceURL = `${_super.namespace}/health`;
export default Adapter.extend({
  // pathForType(type) {
  //   console.log(type);
  //   return this._super(...arguments)
  // },
  findAll() {
    this.namespace = servicesURL;
    return this._super(...arguments);
  },
  // findRecord() {
  //   this.namespace = serviceURL;
  //   return this._super(...arguments);
  // },
  urlForFindAll(id, modelName) {
    return `/${this.namespace}/services`;
  }
});
