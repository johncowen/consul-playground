import { inject as locate } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  em: locate("service"),
  model(params, transition) {
    const name = params.service_Name;
    return this.get('em').findBySlug(name);
  },
});
