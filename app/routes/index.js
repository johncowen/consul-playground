import { inject as locate } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend(
  {
    em: locate('datacenter'),
    request: function(request, render)
    {
      return render(
        {
          items: this.get('em').findAll()
        }
      );
    }
  }
);
