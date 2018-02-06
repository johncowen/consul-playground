import Service from '@ember/service';

export default Service.extend({
  findByDatacenter: function(datacenter) {
    return this.get('store').findAll('node');
  },
  findBySlug: function(slug) {
    return this.get('store').findRecord('node', slug);
  },
});
