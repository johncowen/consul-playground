import Service, { inject as locate } from '@ember/service';
import { computed, set } from '@ember/object';

export default Service.extend({
  store: locate('store'),
  service: locate('service'),
  node: locate('node'),
  items: computed(function() {
    return this.get('store').findAll('datacenter');
  }),
  findAll: function() {
    return this.get('items')
  },
  findBySlug: function(slug) {
    const o = this;
    // just populate the lot
    // for now
    return this.findAll().then(
      function(datacenters)
      {
        return datacenters.findBy('Name', slug);
      }
    ).then(
      function(item)
      {
        return o.get('service').findByDatacenter(item.get('Name')).then(
          function(services)
          {
            // set(item, 'Services', services);
            item.Services = services;
            return item;
          }
        );
      }
    ).then(
      function(item)
      {
        return o.get('node').findByDatacenter(item.get('Name')).then(
          function(nodes)
          {
            // set(item, 'Nodes', nodes);
            item.Nodes = nodes;
            return item;
          }
        );
      }
    ).catch(
      function()
      {
        console.log("ERROR");
      }
    )
  }
});
