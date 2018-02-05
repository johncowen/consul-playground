import Route from '@ember/routing/route';
export default Route.extend(
  {
    request: function(request, render)
    {
      const slug = this.paramsFor("datacenter").Name;
      return render(
        {
          item: this.get('repo').findBySlug(slug)
        }
      );
    }
  }
);
