import normalize from '../lib/createArrayNormalizerMixin';

import Serializer from './application';
export default Serializer.extend(
  normalize('findAll'),
  {
    primaryKey: 'Name'
  }
);
