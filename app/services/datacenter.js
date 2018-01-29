import Service, { inject as locate } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  store: locate('store'),
  services: locate('services'),
  items: computed(function() {
    return this.get('store').findAll('datacenter');
  }),
  findAll: function() {
    return this.get('items')
  },
  findBySlug: function(slug) {
    const o = this;
    return this.findAll().then(
      function(datacenters)
      {
        return datacenters.findBy('Name', slug);
      }
    ).then(
      function(item)
      {
        return o.get('services').findByDatacenter(item.get('Name')).then(
          function(services)
          {
            item.Services = services;
            return item;
          }
        );
      }
    );
  }
});
