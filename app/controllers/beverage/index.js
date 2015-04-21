import Ember from 'ember';

export default Ember.Controller.extend({
	searchQuery: '',

	filteredList: Ember.computed('searchQuery', function() {
		var query = this.get('searchQuery');
		var beverages = this.get('model');

    if (query) {
      beverages = beverages.filter(function(item) {
        if (item.get('name').toLowerCase().indexOf(query.toLowerCase()) > -1) { return true; }
      });
    }

		return beverages;
	})
});
