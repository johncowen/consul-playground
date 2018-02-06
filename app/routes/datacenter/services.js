import Route from '@ember/routing/route';

export default Route.extend(
  {
    // repo: service('datacenter')
    request: function(request, render)
    {
      const datacenter = this.paramsFor("datacenter").Name;
      return render(
        {
          item: this.get('repo').findBySlug(datacenter).then(
            function(item) {
              return item;
            }
          )
        }
      );
    }
  },
);
