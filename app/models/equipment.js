import DS from 'ember-data';

var Equipment = DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string')
});

export default Equipment;