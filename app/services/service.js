import Service, { inject as locate } from '@ember/service';

export default Service.extend({
  findByDatacenter: function(datacenter) {
      return this.get('store').findAll('service');
  },
  findBySlug: function(slug) {
      // end of the promise chain is completely lost here :(, catch is pointless
      // return this.get('store').findRecord('sevice', slug).catch(console.error);
      // this is caught hggher up fine
      // return Promise.reject("hi");
      // error.hbs doesn't catch this either
      return this.get('store').findRecord('service', slug);//.catch(console.error);
  },
});
