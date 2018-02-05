import Adapter from './application';

import tickControl from 'npm:@gardenhq/tick-control';
import fake from 'npm:faker';
import renderer from 'npm:rest-double/lib/render';
import Service from '@ember/service';

import fetch from 'fetch';

const TemplateLiteral = tickControl();



const render = renderer(TemplateLiteral, fake, 123);
export default Adapter.extend({
  urlForFindAll: function(id, modelName) {
    return `/${this.namespace}/catalog/datacenters`;
  },
  findAll: function(store, modelClass, sinceToken, snapshotArray) {
    const path = this.urlForFindAll(null, modelClass);
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
    ).then(JSON.parse).then(
      function(json)
      {
        // console.log(json);
        return json;
      }
    );
  }
});
