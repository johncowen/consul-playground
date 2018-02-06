import Adapter from 'ember-data/adapters/rest';
import { inject as locate } from '@ember/service';

export function initialize(application) {
  Adapter.reopen(
    {
      // finder /* :Findable */: locate('finder.index'),
      findAll: function() {
        return this.get('finder').findAll.apply(this, arguments);
      },
      findRecord: function()
      {
        return this.get('finder').findRecord.apply(this, arguments);
      }
    }
  )
}

export default {
  name: 'findable-adapter',
  initialize: initialize
};
