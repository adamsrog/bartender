import DS from 'ember-data';

var Beverage = DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  container: DS.attr(),
  description: DS.attr(),
  amounts: DS.attr(),
  ingredients: DS.hasMany('ingredient', {async: true}),
  steps: DS.attr(),
  tags: DS.attr(),

  combined: Ember.computed('amounts', 'ingredients', function() {
  	var amounts = this.get('amounts');
  	var ingredients = this.get('ingredients.content');
  	var combined = [];
  	var count = 0;
  	ingredients.forEach(function(ingredient) {
  		combined.push(amounts[count] + ' ' + ingredient.get('name'));
  		count++;
  	});
  	return combined;
  })
});

Beverage.reopenClass({
	FIXTURES: [
		{
			id: 'abbey-cocktail',
			name: 'Abbey Cocktail',
			type: 'cocktail',
			container: 'cocktail-glass',
			description: '',
			amounts: ['1.5 oz','.75 oz','.75 oz','2 dashes','1'],
			ingredients: ['gin','lillet-blanc','orange-juice','angostura-bitters','maraschino-cherry'],
			steps: ['Shake the liquid ingredients vigorously with ice.','Strain into a chilled cocktail glass.','Garnish with the cherry.'],
			tags: [],
		}
	]
});

export default Beverage;
