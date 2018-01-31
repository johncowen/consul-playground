// import { collect, sum, bool, equal } from '@ember/object/computed';
// import { computed } from '@ember/object';
import Entity from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
// import { fragmentArray } from 'ember-data-model-fragments/attributes';
// import sumAggregation from '../utils/properties/sum-aggregation';
export default Entity.extend({
  ID: attr('string'),
  Address: attr('string'),
  Node: attr(),
  Meta: attr(),
  Services: attr(),
  Checks: attr(),
  TaggedAddresses: attr(),
  Datacenter: belongsTo('datacenter')
});

