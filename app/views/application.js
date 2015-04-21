import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$(".button-collapse").sideNav({
			menuWidth: 150,
			closeOnClick: true
		});
	}
});
