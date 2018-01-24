import Route from '@ember/routing/route';
import { computed } from '@ember/object';

export default Route.extend({
  // em: computed(
  //   function() {
  //     const o = this;
  //     return {
  //       find() {
  //         return ['dc', 'something'];
  //       }
  //     }
  // }),
  model(params) {
    return this.get('store').findAll('datacenter')
  }
});
