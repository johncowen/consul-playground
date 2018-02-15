export default function(EventTarget) {
  const run = function(target)
  {
    return target._source(/* configuration?? */).then(
      (res) => {
        target.dispatchEvent('message', res);
        // careful this doesn't run away, maybe look to throttle
        run(target);
      }
    );
  }
  const CallableEventSource = function(source, configuration)
  {
    // this.readyState
    // this.url // not applicable here, maybe surface _source
    // this.withCredentials // not applicable here?
    this._source = source;
    // nasty next tick in case it comes back to quick
    // a promise would be better
    setTimeout(
      () => {
        run(this);
      },
      0
    );
  }
  const o = CallableEventSource.prototype = new EventTarget;
  // temporarily tailor to RSVP here
  o.addEventListener = function()
  {
    return this.on(...arguments);
  }
  o.dispatchEvent = function()
  {
    // message
    // error
    // open
    return this.trigger(...arguments);
  }
  o.close = function()
  {
    console.log('Yet to implement');
  }
  return CallableEventSource;
}
