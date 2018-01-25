import normalize from '../lib/createArrayNormalizer';

import Serializer from './application';
export default Serializer.extend(
  normalize('findAll'),
  {
    primaryKey: 'Name'
  }
);
