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

		selectedIngredients.forEach(function(ingredient) {
			beverages.forEach(function(beverage) {
				var ingredients = beverage.get('ingredientsArray');
				if (ingredients.contains(ingredient)) {
					var name = beverage.get('name');
					if (!filteredBeverages[name]) {	
						filteredBeverages[name] = {};	
					}
					filteredBeverages[name].beverage = beverage;

					// adjust ranking for match
					if (filteredBeverages[name].rank) {
						filteredBeverages[name].rank++
					} else {
						filteredBeverages[name].rank = 1;
					}
				}
			});
		});

		// turn object back into an array
		for (var key in filteredBeverages) {
			if (filteredBeverages.hasOwnProperty(key)) {
				filteredBeverages[key].beverage.set('rank', filteredBeverages[key].rank);
				availableBeverages.push(filteredBeverages[key].beverage);
			}
		}

		// return array that is sorted by rank descending
		return availableBeverages.sortBy('rank').reverse();
	})
});
