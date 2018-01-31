import normalize from '../lib/createArrayNormalizer';
import Serializer from './application';
export default Serializer.extend(
  {
    primaryKey: 'ID',
    normalizeFindRecordResponse: function(store, primaryModelClass, payload, id, requestType) {
      payload = {
        node: payload
      };
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  },
  normalize(
    'findAll'
  )
);
