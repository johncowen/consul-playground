import Route from '@ember/routing/route';
import { Promise, hash } from 'rsvp';
import { typeOf } from '@ember/utils';

const isEventTarget = function(obj)
{
  return typeof obj.addEventListener !== "undefined";
}
const addEventListeners = function(controller, model)
{
  if(model != null) {
    Object.keys(
      model
    ).forEach(
      function(key) {
        if(isEventTarget(model[key])) {
          model[key].addEventListener(
            'message',
            function(data) {
              controller.set(key, data);
            }
          );
        }
      }
    );
  }
  return model;
}
export function initialize(application) {
  Route.reopen(
    {
      model: function(params, transition) {
        return new Promise(
          (resolve, reject) => {
            // do we lose the promise chain after here? Can we get it further up?
            // Route.error isn't promise based
            // refactor this out asap, look at doing this via actions.error
            this.request(params, hash).then(resolve).catch(this.actions.error)
          }
        )
      },
      request: function(request, response)
      {
        // really response=RSVP.hash
        return response(
          request
        );
      },
      setupController: function(controller, model)
      {
        model = addEventListeners(controller, model);
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
        error: function(e, transition)
        {
          console.warn(e.message.split("\n")[0]);
          if(!typeOf(e.errors, 'undefined')) {
            e.errors.forEach(
              function(item) {
                console.error(item.title, item.status);
              }
            );

          }
          console.error(e);
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
