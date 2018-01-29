export default function(cb)
{
  return {
    renderTemplate: function(controller, params) {
      cb.bind(this)(
        params,
        {
          render: function(vars)
          {
            const keys = Object.keys(vars);
            return Promise.all(
              keys.map(
                function(item)
                {
                  return vars[item];
                }
              )
            ).then(
              function(vars)
              {
                return keys.reduce(
                  function(prev, item, i, arr)
                  {
                    prev[item] = vars[i];
                    return prev;
                  },
                  {}
                );
              }
            ).then(
              function(vars)
              {
                controller.setProperties(
                  vars
                );
              }
            )
          }
        }
      );
      this._super(...arguments);
    }
  }
}

