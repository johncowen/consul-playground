import merge from 'npm:merge-options';
import Builder from '../lib/Builder';
// import and merge manually for now, this should be built to
// ensure any conditional importing is done at build time
import emberConfig from '../containers/ember';
import indexConfig from '../containers/index';
import datacenterConfig from '../containers/datacenter';
import serviceConfig from '../containers/service';
import nodeConfig from '../containers/node';

import devConfig from '../containers/dev';
// import testConfig from '../containers/test';
let config = {};
if(true && devConfig) {
  config = merge(
    config,
    devConfig
  );
}

export function initialize(container /*application*/) {
  const builder = new Builder(container);
  return builder.set("service:builder", builder).build(
    merge(
      emberConfig,
      indexConfig,
      datacenterConfig,
      serviceConfig,
      nodeConfig,
      config
    )
  );
}
export default {
  name: 'builder',
  initialize: initialize
};
