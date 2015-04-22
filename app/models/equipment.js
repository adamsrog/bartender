import DS from 'ember-data';

var Equipment = DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  description: DS.attr(),
  image: DS.attr()
});

export default Equipment;