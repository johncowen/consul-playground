import Adapter from './application';
export default Adapter.extend({
  findAll() {
    return this._super(...arguments);
  },
  urlForFindAll(id, modelName) {
    return `/${this.namespace}/internal/ui/services`;
  }
});
