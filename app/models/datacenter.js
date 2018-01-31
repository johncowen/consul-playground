// import { collect, sum, bool, equal } from '@ember/object/computed';
// import { computed } from '@ember/object';
import Entity from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
// import { fragmentArray } from 'ember-data-model-fragments/attributes';
// import sumAggregation from '../utils/properties/sum-aggregation';
export default Entity.extend({
  Name: attr('string'),
  Services: hasMany('service')
});

