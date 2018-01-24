import { inject as locateService } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: locateService(),
  model(params) {
    return this.get('store')
      .findAll('service-collection')
  },
});
