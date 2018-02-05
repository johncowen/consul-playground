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
        // if I mutate things on a model i.e. model.item
        // and then from a child of this Route
        // ask for a parents model.item is that mutation respected?
        controller.setProperties(
          model
        );
      },
      // redirect: function(model, transition){},
      actions: {
      //   loading: function(transition, originRoute)
      //   {
      //     transition.promise.finally(
      //       function()
      //       {
      //         console.log("finished loading");
      //         // finished loading
      //       }
      //     );
      //   },
        error: function(error, transition)
        {
          console.error(error);
          return false;
          // if (error.status === '403') {
          //   // location.replace() // hisory.replaceState()
          //   this.replaceWith('login');
          // } else {
          //   // Let the route above this handle the error.
          //   return true;
          // }
        },
      //   willTransition: function(transition)
      //   {
      //     if(false) {
      //       transition.abort();
      //     }
      //     return true;
      //   }
      }
    }
  )
}

export default {
  name: 'requestify',
  initialize: initialize
};
