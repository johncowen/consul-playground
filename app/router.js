import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
/*
  Surely there's a better way to not get clashes with property names?
  So :Name here can be on a Datacenter, or on a Service
  This link:
  https://guides.emberjs.com/v2.18.0/routing/defining-your-routes/#toc_dynamic-segments
  Explains you can do model-name_Name, but I'm not sure if I'm doing it right as it doesn't
  seem to do what I'd expect. It also means that the params in model(params, transition)
  comes back with params['model-name_Name'] instead of params.Name
*/
Router.map(function() {
  this.route(
    'datacenter',
    {
      path: '/:Name'
    },
    function() {
      this.route('services', {path: '/services'}, function() {
        this.route('service', {path: '/:Name'});
      });
      this.route('nodes', {path: '/nodes'}, function() {
        this.route('node', {path: '/:Name'});
      });
      this.route('kv', {path: '/kv'}, function() {
        this.route('kv', {path: '/*'});
      });
    }
  );
});

export default Router;
