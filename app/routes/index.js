import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			beverages: this.store.find('beverage'),
			ingredients: this.store.find('ingredient')
		});
	}
});
