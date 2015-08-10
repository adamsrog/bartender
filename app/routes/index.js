import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			beverages: this.store.findAll('beverage'),
			ingredients: this.store.findAll('ingredient')
		});
	}
});
