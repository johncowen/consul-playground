import Service from '@ember/service';

import fetch from 'fetch';

import renderFactory from 'npm:astroturf';
const render = renderFactory(23/* faker seed */);
const find = function(path)
{
  return fetch(path)
    .then(response => response.text())
    .then(template => render(
      {
        href: path,
        content: template,
        headers: {}, method: "GET"
      }
    ))
    .then(JSON.parse)
}

export default Service.extend({
  // look at query/queryRecord, which I think is the closest
  // public method to ajax
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

