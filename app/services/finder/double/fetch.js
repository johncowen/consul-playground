import Service from '@ember/service';

import fetch from 'fetch';

import renderFactory from 'npm:rest-double/render';
const render = renderFactory(23/* faker seed */);
const find = function(path)
{
  return fetch(path)
    .then(response => response.text())
    .then(template => render(path, template))
    .then(JSON.parse)
}

export default Service.extend({
  findAll: function(store, modelClass, sinceToken, snapshotArray) {
    const path = this.urlForFindAll(null, modelClass.modelName);
    return find(`/node_modules/consul-api-double/${path}`);
  },
  findRecord: function(store, modelClass, id, snapShotArray /*??*/)
  {
    let path = this.urlForFindRecord(id, modelClass.modelName);
    // temp replace hack
    return find(`/node_modules/consul-api-double/${path.replace(id, '_')}`);
  }
});

