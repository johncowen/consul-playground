import normalize from '../lib/createArrayNormalizer';

import Serializer from './application';
export default Serializer.extend(
  normalize(
    'findAll',
    (item) => ({Name: item})
  ),
  {
    primaryKey: 'Name'
    }
);
