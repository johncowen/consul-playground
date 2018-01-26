import Adapter from './application';
export default Adapter.extend({
  // findAll() {
  //   return ['dc1', 'us-east-11'];
  // },
  urlForFindAll(id, modelName) {
    return `/${this.namespace}/catalog/datacenters`;
  }
});
