import Ember from 'ember';

export default Ember.Controller.extend({
	searchQuery: '',

	filteredList: Ember.computed('searchQuery', function() {
		var query = this.get('searchQuery');
		var equipment = this.get('model');

    if (query) {
      equipment = equipment.filter(function(item) {
        if (item.get('name').toLowerCase().indexOf(query.toLowerCase()) > -1) { return true; }
      });
    }

		return equipment;
	})
});
