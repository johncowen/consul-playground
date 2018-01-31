import response from '../../../lib/response';

import { inject as locate } from '@ember/service';
import Route from '@ember/routing/route';
export default Route.extend(
  {
    em: locate('node')
  },
  response(
    function(request, template)
    {
      const name = request.node_Name;
      return template.render(
        {
          item: this.get('em').findBySlug(name)
        }
      );
    }
  ),
);
