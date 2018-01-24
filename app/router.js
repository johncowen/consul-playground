import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route(
    'datacenter',
    {
      path: '/:Name'
    },
    function()
    {
      this.route('service-collection', {path: '/services'}, function() {
        this.route('service', {path: '/:Name'});
      });
    }
  );
});

export default Router;
