import normalize from '../lib/normalizeArrayResponse';

import Serializer from './application';

export default Serializer.extend({
  primaryKey: 'Name',
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    // this._super;
    return normalize.bind(this)(
      ...arguments,
      function(item) {
        return {Name: item};
      }
    );
  },
});
