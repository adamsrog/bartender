import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  container: DS.attr(),
  description: DS.attr(),
  ingredients: DS.hasMany('ingredient'),
  steps: DS.attr(),
  tags: DS.attr()
});
