import Ember from 'ember';

export default Ember.Controller.extend({
	test: Ember.computed('model', function() {
		var test = this.get('model.equipment');
		Ember.Logger.info('....!!', this.get('model.equipment').get('content'), this.get('model.equipment'));
		return test;
	})
});
