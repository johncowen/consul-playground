import normalize from '../lib/createArrayNormalizer';
import { assign } from '@ember/polyfills';
import Serializer from './application';
export default Serializer.extend(
  normalize(
    'findAll',
    (item) => assign(
      item,
      {Id: `${item.Service.ID}`}
    )
  ),
  {
    primaryKey: 'Id',
  }
);
