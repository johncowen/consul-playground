import Adapter from './application';
export default Adapter.extend({
  urlForFindRecord(id, modelName) {
    return `/${this.namespace}/health/service/${id}`;
  }
});
