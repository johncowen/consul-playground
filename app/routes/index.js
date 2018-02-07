import Route from '@ember/routing/route';

export default Route.extend(
  // (repo:DatacenterRepository)
  {
    request: function(request, render)
    {
      return render(
        {
          items: this.get('repo').findAll()
        }
      );
    }
  }
);
