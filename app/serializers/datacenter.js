import normalize from '../lib/createArrayNormalizerMixin';

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
