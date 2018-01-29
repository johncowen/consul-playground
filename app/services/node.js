import Service, { inject as locate } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  store: locate('store'),
  findByDatacenter: function(datacenter) {
    return this.get('store').findAll('node');
  },
  findBySlug: function(slug) {
    return this.get('store').findRecord('node', slug);
  },
});
