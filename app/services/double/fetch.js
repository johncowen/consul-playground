import tickControl from 'npm:@gardenhq/tick-control';
import fake from 'npm:faker';
import renderer from 'npm:rest-double/lib/render';
import Service from '@ember/service';

import fetch from 'fetch';

const TemplateLiteral = tickControl();
const render = renderer(TemplateLiteral, fake, 123);

export default Service.extend({
  findAll: function(type) {
    const adaptor = this.get(`${type}Adaptor`);
    const serializer = this.get(`${type}Serializer`);

    const path = adaptor.urlForFindAll(null, type);
    return fetch(`/node_modules/consul-api-double/${path}`).then(
      function(template)
      {
        return template.text();
      }
    ).then(
      function(template)
      {
        return render(path, template);
      }
    ).then(
      (json) => {
        console.log(serializer.normalizeFindAllResponse(
          this.get('store'),
          {
            modelName: type
          },
          JSON.parse(json),
          null,
          'findAll'
        ).included);
        return [];
      }
    );
  },
  findRecord: function(type, id) {
    let path = adaptor.urlForFindRecord(id, type);
    // temp hack
    return fetch(`/node_modules/consul-api-double/${path.replace(id, '_')}`).then(
      function(template)
      {
        return template.text();
      }
    ).then(
      function(template)
      {
        return render(path, template);
      }
    ).then(
      (json) => {
        return serializer.normalize(
          type,
          JSON.parse(json)
        )[type];
      }
    );
  },
});

