import normalize from '../lib/normalizeArrayResponse';

import Serializer from './application';

export default Serializer.extend({
  primaryKey: 'Name',
  normalizeFindAllResponse() {
    this._super; // ????
    return normalize.bind(this)(...arguments)
  },
});
