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
  	ingredients.forEach(function(ingredient, index) {
      ingredient.amount = amounts[index].amount;
      ingredient.measurement = amounts[index].measurement;
  		combined.push(ingredient);
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
			// amounts: ['1.5 oz','.75 oz','.75 oz','2 dashes','1'],
      amounts: [
        { amount: 1.5, measurement: 'oz' },
        { amount: 0.75, measurement: 'oz' },
        { amount: 0.75, measurement: 'oz' },
        { amount: 2, measurement: 'dash' },
        { amount: 1, measurement: 'count' },

      ], 
			ingredients: ['gin','lillet-blanc','orange-juice','angostura-bitters','maraschino-cherry'],
			steps: ['Shake the liquid ingredients vigorously with ice.','Strain into a chilled cocktail glass.','Garnish with the cherry.'],
			tags: [],
		}
	]
});

export default Beverage;
