import Adapter from './application';
export default Adapter.extend({
  urlForFindAll(id, modelName) {
    return `/${this.namespace}/internal/ui/services`;
  }
});
