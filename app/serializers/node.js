import normalize from '../lib/createArrayNormalizer';
import { assign } from '@ember/polyfills';
import Serializer from './application';
export default Serializer.extend(
  // normalize(
  //   'findRecord',
  //   (item) => assign(
  //     item,
  //     {Id: `${item.Service.ID}`}
  //   )
  // ),
  normalize(
    'findAll'
  ),
  {
    primaryKey: 'ID'
  }
);
