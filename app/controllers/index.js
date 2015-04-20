import Ember from 'ember';

export default Ember.Controller.extend({
	selectedIngredients: [],

	availableBeverages: Ember.computed('selectedIngredients', function() {
		/*
			availableBeverages will be sorted based on the user's entry
			- iterate over each selectedIngredient and determine if 
				ingredient is present.
			- each beverage rank will increase by a point for each match
			- beverages will all of their ingredients entered will
				be ranked highest
		 */
		var beverages = this.get('model.beverages');
		var availableBeverages = [];
		var filteredBeverages = {};
		var selectedIngredients = this.get('selectedIngredients');
		console.log('sorting', beverages, selectedIngredients);

		selectedIngredients.forEach(function(ingredient) {
			console.log('current ingredient: ', ingredient);
			beverages.forEach(function(beverage) {
				var ingredients = beverage.get('ingredientsArray');
				if (ingredients.contains(ingredient)) {
					var name = beverage.get('name');
					console.log('match found ->', ingredient, 'is in', name);
					if (!filteredBeverages[name]) {
						console.log('aint shit here breh');
						filteredBeverages[name] = {};
					}
					
					filteredBeverages[name].beverage = beverage;
					if (filteredBeverages[name].rank) {
						filteredBeverages[name].rank++
					} else {
						filteredBeverages[name].rank = 1;
					}
				}
			});
		});

		// selectedIngredients.forEach(function(ingredient) {
		// 	console.log('ingredient', ingredient);
		// 	availableBeverages = beverages.filter(function(beverage, index) {
		// 		var ingredients = beverage.get('ingredientsArray');
		// 		console.log('drink', index, 'bevid', beverage.id, ingredients, ingredients.contains(ingredient));
		// 		return ingredients.contains(ingredient);
		// 	});
		// });

		console.log('finished', filteredBeverages);
		return availableBeverages;
	})
});
