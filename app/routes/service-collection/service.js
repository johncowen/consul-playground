import { inject as locateService } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: locateService(),
  model(params, transition) {
    console.log("HERE");
    return this.get('store')
      .findRecord(
        'service',
        params.Name,
        {
          reload: true
        }
      )
  },
});
