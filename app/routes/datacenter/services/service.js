import Route from '@ember/routing/route';

export default Route.extend(
  {
    request: function(request, render)
    {
      const slug = request.Name;
      return render(
        {
          item: this.get('repo').findBySlug(slug)
        }
      );
    }
  },
);
