import { inject as locate } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  em: locate('datacenter'),
  model(params) {
    return this.get('em.items')
  }
});
