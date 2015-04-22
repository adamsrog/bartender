import DS from 'ember-data';
import Ember from 'ember';

//a dash = 1/48th oz (0.0208333 oz)
var Ingredient = DS.Model.extend({
  name: DS.attr(),
  text: Ember.computed.alias('name'),
  type: DS.attr(),
  description: DS.attr(),
  equivalents: DS.hasMany('ingredient', {async:true})
});

export default Ingredient;