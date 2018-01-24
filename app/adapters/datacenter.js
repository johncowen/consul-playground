import Adapter from './application';
const _super = Adapter.create();
const itemsURL = `${_super.namespace}/catalog`;
const serviceURL = `${_super.namespace}/health`;
export default Adapter.extend({
  // pathForType(type) {
  //   console.log(type);
  //   return this._super(...arguments)
  // },
  findAll() {
    return ['dc1', 'us-east-11'];
    // this.namespace = itemsURL;
    // return this._super(...arguments);
  },
  // findRecord() {
  //   this.namespace = serviceURL;
  //   return this._super(...arguments);
  // },
  // urlForFindAll(id, modelName) {
  //   return `/${this.namespace}/services`;
  // }
});
