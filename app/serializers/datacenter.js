import normalize from '../lib/createArrayNormalizer';

import Serializer from './application';
export default Serializer.extend(
  {
    primaryKey: 'Name'
  },
  normalize(
    'findAll',
    function(item) {
      // item is just a string with the name/slug
      // of the datacenter
      return {
        [this.get('primaryKey')]: item
      };
    }
  )
);
