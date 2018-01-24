import { inject as locate } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  em: locate('datacenter'),
  items: computed(
    'em.datacenters.[]',
    function() {
      return this.get('em.items');
    }
  ),
  selected: computed(
    "items",
    function()
    {
      return this.get("items").toArray()[0];
    }
  ),
  actions: {
    onChange(item) {
      console.log(item.get('Name'));
    }

  }
});
