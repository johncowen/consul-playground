import normalize from '../lib/normalizeArrayResponse';

import Serializer from './application';
const idify = function(item, i, arr) {
  // keep this here for the moment, these should eventually be unique
  // item.Name = `${item.Service.ID}.${item.Node.ID}`;
  item.Id = `${item.Service.ID}`;
  return item;
}
export default Serializer.extend({
  primaryKey: 'Id',
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    //this._super;

    return normalize.bind(this)(...arguments, idify)
    return res;
  },
});
