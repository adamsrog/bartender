import DS from 'ember-data';
import Ember from 'ember';

//a dash = 1/48th oz (0.0208333 oz)
var Ingredient = DS.Model.extend({
  name: DS.attr('string'),
  text: Ember.computed.alias('name'),
  type: DS.attr('string'),
  description: DS.attr('string'),
  equivalents: DS.hasMany('ingredient', {async:true})
});

export default Ingredient;