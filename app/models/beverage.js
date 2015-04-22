import Ember from 'ember';
import DS from 'ember-data';

var Beverage = DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  equipment: DS.belongsTo('equipment', {async: true}),
  image: Ember.computed('equipment', function() {
    var equipment = this.get('equipment');
    return equipment.get('image');
  }),
  description: DS.attr(),
  amounts: DS.attr(),
  ingredients: DS.hasMany('ingredient', {async: true}),
  ingredientsArray: DS.attr(),
  steps: DS.attr(),
  tags: DS.attr(),
  similar: DS.hasMany('beverage', {async: true}),

  combined: Ember.computed('amounts', 'ingredients', function() {
    var amounts = this.get('amounts');
  	var ingredients = this.get('ingredients.content');
  	var combined = [];
  	ingredients.forEach(function(ingredient, index) {
      ingredient.set('amount', amounts[index].amount);
      ingredient.set('measurement', amounts[index].measurement);
  		combined.push(ingredient);
  	});
  	return combined;
  })
});

export default Beverage;
