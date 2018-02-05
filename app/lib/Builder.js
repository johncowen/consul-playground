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
        Object.keys(args).forEach(
          function(key, i, arr)
          {
            this.container.inject(service.class, key, this._find(args[key], config))
          },
          this
        );
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
  get() {

  }
  set() {

  }
  has() {

  }
}
