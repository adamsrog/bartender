import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		saveIngredient: function() {
			this.controllerFor('ingredient/new').set('error', null);

			var id = this.controllerFor('ingredient/new').get('ingredientId');
			var name = this.controllerFor('ingredient/new').get('ingredientName');
			var type = this.controllerFor('ingredient/new').get('ingredientType');
			var description = this.controllerFor('ingredient/new').get('ingredientDescription');
			var error = null;

			// check for errors
			if (!id) { error = 'Please enter a valid ID.'; }
			if (!name) { error = 'Please enter a valid name.'; }
			if (!type) { error = 'Please enter a valid type.'; }
			if (!description) { error = 'Please enter a valid description.'; }
			if (error) { 
				// display error
				this.controllerFor('ingredient/new').set('error', error);
			} else {
				// no errors, create ingredient
				var newIngredient = this.store.createRecord('ingredient', {
					id: id,
					ingredient_id: id,
					name: name,
					type: type,
					description: description
				});
				newIngredient.save().then(function() {
					console.log('do something');
				});
			}
		},
		cancel: function() {
			this.transitionTo('ingredient');
		}
	}
});
