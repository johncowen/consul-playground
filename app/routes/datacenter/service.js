import response from '../../lib/response';

import { inject as locate } from '@ember/service';
import Route from '@ember/routing/route';
export default Route.extend(
  {
    em: locate('service')
  },
  response(
    function(request, template)
    {
      const name = request.service_Name;
      return template.render(
        {
          item: this.get('em').findBySlug(name)
        }
      );
    }
  ),
);
