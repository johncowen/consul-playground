import Route from '@ember/routing/route';
import {Promise, hash} from 'rsvp';
export function initialize(applicationInstance) {
  Route.reopen(
    {
      model: function(params, transition) {
        return new Promise(
          (resolve, reject) => {
            // do we lose the promise chain after here?;
            this.request(params, hash).then(resolve).catch(console.error)
          }
        )
      },
      request: function(request, response)
      {
        return response(
          request
        );
      },
      setupController: function(controller, model)
      {
        controller.setProperties(
          model
        );
      }
    }
  )
}

export default {
  name: 'requestify',
  initialize: initialize
};
