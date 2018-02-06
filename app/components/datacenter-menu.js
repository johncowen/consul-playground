import { inject as locate } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  repo: locate('datacenter'),
  routing: locate('-routing'),
  items: computed(
    function() {
      return this.get('repo').findAll();
    }
  ),
  selected: computed(
    'items',
    'routing.router.currentURL',
    function() {
      const router = this.get("routing.router");
      const pathname = router.get('currentURL');
      const temp = pathname.split('/');
      if(temp.length > 1) {
        const datacenter = temp[1];
        return this.get('items').findBy('Name', datacenter);
      }
    }
  ),
  // didReceiveAttrs: function(options)
  // {
  //   this._super(...arguments);
  //   console.log(this.getAttr("src"));
  // },
  actions: {
    onChange(item) {
      this.get('routing.router').transitionTo('datacenter.services', item.get('Name'));
    }
  }
});
