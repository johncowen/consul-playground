import response from '../lib/response';

import { inject as locate } from '@ember/service';
import Route from '@ember/routing/route';
export default Route.extend(
  {
    em: locate('datacenter')
  },
  response(
    function(request, template)
    {
      const datacenter = request.Name;
      return template.render(
        {
          item: this.get('em').findBySlug(datacenter)
        }
      );
    }
  ),
);
