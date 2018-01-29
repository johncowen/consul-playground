export default function(cb)
{
  return {
    renderTemplate: function(controller, params) {
      cb.bind(this)(
        params,
        {
          render: function(vars)
          {
            controller.setProperties(
              vars
            );
            return;
          }
        }
      );
      this._super(...arguments);
    }
  }
}

