import Ember from 'ember';

export default Ember.Controller.extend({
	selectedIngredients: [],

	availableBeverages: Ember.computed('selectedIngredients', function() {
		var _this = this;
		var beverages = this.get('model.beverages');
		var selectedIngredients = this.get('selectedIngredients');
		console.log('sorting', beverages, selectedIngredients);

		var availableBeverages;
		selectedIngredients.forEach(function(ingredient) {
			console.log('ingredient', ingredient);
			availableBeverages = beverages.filter(function(beverage, index) {
				var ingredients = beverage.get('ingredientsArray');
				console.log('drink', index, 'bevid', beverage.id, ingredients, ingredients.contains(ingredient));
				return ingredients.contains(ingredient);
			});
		});

		console.log('finished', beverages);
		return availableBeverages;
	})
});
