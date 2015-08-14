import Ember from 'ember';

export default Ember.Controller.extend({
	beverage_id: 'dolomint',
	description: '',
	equipment: '',
	ingredientsArray: [
		{amount:1, measurement:'oz', id:'gin'},
		{amount:1, measurement:'oz', id:'galliano'},
		{amount:1, measurement:'oz', id:'lime-juice'},
		{amount:5, measurement:'oz', id:'club-soda'},
		{amount:1, measurement:'count', id:'mint-sprig'},
	],
	name: 'Dolomint',
	stepsData: [
		{step:"Shake the gin, Galliano and lime juice vigorously with ice."}, 
		{step:"Strain into an ice-filled highball glass."}, 
		{step:"Top with club soda and stir gently."}, 
		{step:"Garnish with the mint sprig."}
	],
	type: 'cocktail',

	actions: {
		addIngredient: function() {
			var ingredients = this.get('ingredientsArray');
			ingredients.pushObject({amount: '1', measurement: 'oz', id: ''});
		},
		removeIngredient: function(index) {
			var ingredients = this.get('ingredientsArray');
			// don't allow deletion of final item
			if (ingredients.length > 1) { ingredients.removeAt(index); }
		},
		addStep: function() {
			var steps = this.get('stepsData');
			steps.pushObject({step: ""});
		},
		removeStep: function(index) {
			var steps = this.get('stepsData');
			// don't allow deletion of final item
			if (steps.length > 1) { steps.removeAt(index); }
		},
		saveBeverage() {
			// set up variables
			var ingredients = {};
			var ingredientsArray = [];
			var amounts = [];
			var steps = [];

			// process data
			var stepsData = this.get('stepsData');
			stepsData.forEach(function(step) {
				steps.push(step.step);
			});
			var ingredientsData = this.get('ingredientsArray');
			ingredientsData.forEach(function(ingredient) {
				ingredients[ingredient.id] = true;
				ingredientsArray.push(ingredient.id);
				amounts.push({
					amount: ingredient.amount,
					measurement: ingredient.measurement
				});
			});

			// create
			console.log('ingredientArray', ingredientsArray);
			
			var beverage = {
				amounts: amounts,
				id: this.get('beverage_id'),
				beverage_id: this.get('beverage_id'),
				description: this.get('description'),
				equipment: this.get('equipment'),
				ingredients: ingredientsArray,
				ingredientsArray: ingredientsArray,
				name: this.get('name'),
				steps: steps,
				type: this.get('type'),
				similar: []
			};
			var newBeverage = this.store.createRecord('beverage', beverage);
			// newBeverage.save().then(function() {
			// 	console.log('hory shet!');
			// });
			console.log('new beverage: ', beverage);
		},
		cancelBeverage() {

		}
	}
});
