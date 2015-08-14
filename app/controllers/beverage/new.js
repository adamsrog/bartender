import Ember from 'ember';

export default Ember.Controller.extend({
	amounts: [{amount: 1, measurement: 'oz'}],
	beverage_id: '',
	description: '',
	equipment: '',
	ingredients: Ember.computed('ingredientsArray', function() {

	}),
	ingredientsArray: [{amount:1, measurement:'oz', name:''}],
	name: '',
	steps: [''],
	type: 'cocktail',

	actions: {
		addIngredient: function() {
			var ingredients = this.get('ingredientsArray');
			ingredients.pushObject({amount: '1', measurement: 'oz', name: ''});
		},
		removeIngredient: function(index) {
			var ingredients = this.get('ingredientsArray');
			// don't allow deletion of final item
			if (ingredients.length > 1) { ingredients.removeAt(index); }
		},
		addStep: function() {
			var steps = this.get('steps');
			steps.addObject(steps.length);
		},
		removeStep: function(index) {
			var steps = this.get('steps');
			// don't allow deletion of final item
			if (steps.length > 1) { steps.removeAt(index); }
		}
	}
});
