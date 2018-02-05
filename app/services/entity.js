import Service, { inject as locate } from '@ember/service';

export default Service.extend({
  findAll: function(type) {
    return [
      {
        Name: "hi"
      },
      {
        Name: "There"
      }
    ]
  },
  findRecord: function(type, id) {
  },
});

