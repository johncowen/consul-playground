import Builder from '../lib/Builder';
// import and merge manually for now
import indexConfig from '../containers/index';
import datacenterConfig from '../containers/datacenter';
import serviceConfig from '../containers/service';
import nodeConfig from '../containers/node';

export function initialize(container /*application*/) {
  console.log("Builder");
  const builder = new Builder(container);
  builder.build(
    Object.assign(
      indexConfig,
      datacenterConfig,
      serviceConfig,
      nodeConfig
    )
  );
}
export default {
  name: 'builder',
  initialize: initialize
};
