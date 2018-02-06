import Route from '@ember/routing/route';
import Adapter from 'ember-data/adapters/rest';
import Service, { inject as locate } from '@ember/service';
const EmberBase = {
  'route': Route,
  'adapter': Adapter,
  'service': Service
};

// quick POC ContainerBuilder
export default class Builder {
  constructor(container) {
    this.container = container;
  }
  build(config) {
    if(typeof config === "function") {
      config = config(this.container);
    }
    Object.keys(config).forEach(
      function(key, i, arr)
      {
        const service = config[key];
        if(typeof service.object !== "undefined") {
          return;
        }
        const args = service.arguments;
        const cls = service.class;
        // workaround for uninjectable base classes :(
        if(cls.indexOf(":") === -1) {
          EmberBase[cls].reopen(
            Object.keys(args).reduce(
              (prev, key, i, arr) => {
                prev[key] = this.get(this._find(args[key], config));
                return prev;
              },
              {}
            )
          );
        } else {
          Object.keys(args).forEach(
            function(key, i, arr)
            {
              this.container.inject(cls, key, this._find(args[key], config));
            },
            this
          );
        }
      },
      this
    );
    return this;
  }
  // temporary private method for simple recursive resolution
  _find(id, config) {
    if(id.indexOf("@") !== 0) {
      return id;
    }
    id = id.substr(1);
    if(typeof config[id] === "undefined") {
      return id;
    } else {
      const service = config[id];
      return this._find(service.object, config)
    }
  }
  // yet to be implemented interface
  get(qualifiedKey) {
    // what did lookup do?
    // this gets the instance of the class
    // return this.container.resolveRegistration(key);
    const [type, key] = qualifiedKey.split(":");
    switch(type) {
      case "service":
      default:
        return locate(key);
    }
  }
  set() {

  }
  has(key) {
    return this.container.hasRegistration(key);
  }
}
