import { inject as locate } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend(
  {
    em: locate('datacenter'),
    request: function(request, render)
    {
      const datacenter = this.paramsFor("datacenter").Name;
      return render(
        {
          item: this.get('em').findBySlug(datacenter)
        }
      );
    }
  },
);
