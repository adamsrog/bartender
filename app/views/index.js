import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$("#s2id_ingredient-select").css('width','100%');
	}
});
