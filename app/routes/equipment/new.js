import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		saveEquipment: function() {
			var route = this;

			this.controllerFor('equipment/new').set('error', null);

			var id = this.controllerFor('equipment/new').get('equipmentId');
			var name = this.controllerFor('equipment/new').get('equipmentName');
			var type = this.controllerFor('equipment/new').get('equipmentType');
			var description = this.controllerFor('equipment/new').get('equipmentDescription');
			var error = null;

			// check for errors
			if (!id) { error = 'Please enter a valid ID.'; }
			if (!name) { error = 'Please enter a valid name.'; }
			if (!type) { error = 'Please enter a valid type.'; }
			if (!description) { error = 'Please enter a valid description.'; }
			if (error) { 
				// display error
				this.controllerFor('equipment/new').set('error', error);
			} else {
				// no errors, create equipment
				var newEquipment = this.store.createRecord('equipment', {
					id: id,
					equipment_id: id,
					name: name,
					type: type,
					description: description
				});

				newEquipment.save().then(function() {
					route.transitionTo('equipment');
				}, function() {
					route.controllerFor('equipment/new').set('error', 'There was an error saving your entry.');
				});
			}
		},
		cancel: function() {
			this.transitionTo('equipment');
		}
	}
});