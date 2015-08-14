import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			glassware: this.store.filter('equipment', { type:'glassware' }, function(equipment) {
				return equipment.get('type') === 'glassware';
			}),
			ingredients: this.store.findAll('ingredient')
		});
	}
});
