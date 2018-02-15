import Service from '@ember/service';
import { set } from '@ember/object';
export default Service.extend({
  //                  (store: EmberDataStore, service:ServiceRepository, node:NodeRepository)
  findAll: function() {
    return this.get('store').findAll('datacenter');
  },
  findBySlug: function(slug) {
    // just populate the lot
    // for now
    var item;
    return this.findAll().then(
      function(datacenters)
      {
        return datacenters.findBy('Name', slug);
      }
    ).then(
      (datacenter) => {
        item = datacenter;
        // const result = this.get('service').findByDatacenter(item.get('Name'));
        // return new Promise(
        //   function(resolve, reject)
        //   {
        //     result.on(
        //       'message',
        //       function(result)
        //       {
        //         resolve(result)
        //       }
        //     );

        //   }
        // );
      }
    ).then(
      function(services)
      {
        // set(item, 'Services', services);
        // item.Services = services;
        return item;
      }
    ).then(
      (item) => {
        return this.get('node').findByDatacenter(item.get('Name')).then(
          function(nodes)
          {
            set(item, 'Nodes', nodes);
            // item.Nodes = nodes;
            return item;
          }
        );
      }
    );
  }
});
