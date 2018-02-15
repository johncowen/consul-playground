import Service from '@ember/service';
import Ember from 'ember';
import { inject as locate } from '@ember/service';

import eventSourceFactory from '../lib/CallableEventSource';
const EventTarget = function(){};
Ember.RSVP.EventTarget.mixin(EventTarget.prototype);
const EventSource = eventSourceFactory(EventTarget);

export default Service.extend({
  store: locate('store'),
  findByDatacenter: function(datacenter) {
    const source = new EventSource(
      () => {
        return this.get('store').findAll(
          'service',
          {
            reload: true,
            adapterOptions: {
              dc: datacenter
            }
          }
        ).catch(
          function(e) {
            switch(e.errors[0].status) {
              case "504":
                break;
              default:
                throw e;
            }
          }
        );
      }
    );
    return source;
  },
  findBySlug: function(slug) {
      // end of the promise chain is completely lost here :(, catch is pointless
      // return this.get('store').findRecord('sevice', slug).catch(console.error);
      // this is caught hggher up fine
      // return Promise.reject("hi");
      // error.hbs doesn't catch this either
      return this.get('store').findRecord(
        'service',
        slug
      );//.catch(console.error);
  },
});
