// import Serializer from './application';
const arrayToPayload = (arr, property) => {
  return {
    [property]: arr
  }
}
import Serializer from 'ember-data/serializers/rest';
export default Serializer.extend({
  primaryKey: 'Name',
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(
      store,
      primaryModelClass,
      arrayToPayload(
        payload.map((item) => ({Name: item})),
        primaryModelClass.modelName
      ),
      id,
      requestType
    );
  },
});
