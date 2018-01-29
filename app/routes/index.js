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
      return template.render(
        {
          model: this.get('em').findAll()
        }
      );
    }
  ),
);
