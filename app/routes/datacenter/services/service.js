import { inject as locate } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend(
  {
    em: locate('service'),
    request: function(request, render)
    {
      const slug = request.Name;
      return render(
        {
          item: this.get('em').findBySlug(slug)
        }
      );
    }
  },
);
