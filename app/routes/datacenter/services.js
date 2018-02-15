import Route from '@ember/routing/route';
import { inject as locate } from '@ember/service';

export default Route.extend(
  {
    // repo: service('datacenter')
    services: locate('services'),
    request: function(request, render)
    {
      const datacenter = this.paramsFor("datacenter").Name;
      return render(
        {
          item: this.get('repo').findBySlug(datacenter),
          items: this.get('services').findByDatacenter(datacenter)
        }
      );
    }
  },
);
