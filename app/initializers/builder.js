import Builder from '../lib/Builder';
// import and merge manually for now, this should be built to
// ensure any conditional importing is done at build time
import indexConfig from '../containers/index';
import datacenterConfig from '../containers/datacenter';
import serviceConfig from '../containers/service';
import nodeConfig from '../containers/node';

import prodConfig from '../containers/prod';
import devConfig from '../containers/dev';
// import testConfig from '../containers/test';
let config = prodConfig;
if(true) {
  config = Object.assign(
    config,
    devConfig
  );
}

export function initialize(container /*application*/) {
  const builder = new Builder(container);
  builder.build(
    Object.assign(
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
