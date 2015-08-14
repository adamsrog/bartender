import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			equipment: this.store.findAll('equipment'),
			ingredients: this.store.findAll('ingredient')
		});
	}
});
