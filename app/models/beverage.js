import DS from 'ember-data';

var Beverage = DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  container: DS.attr(),
  description: DS.attr(),
  ingredients: DS.hasMany('ingredient', {async: true}),
  steps: DS.attr(),
  tags: DS.attr()
});

Beverage.reopenClass({
	FIXTURES: [
		{
			id: 'abbey-cocktail',
			name: 'Abbey Cocktail',
			type: 'cocktail',
			container: 'cocktail-glass',
			description: '',
			ingredients: ['gin','lillet-blanc','orange-juice','angostura-bitters','maraschino-cherry'],
			steps: ['Shake the liquid ingredients vigorously with ice.','Strain into a chilled cocktail glass.','Garnish with the cherry.'],
			tags: []
		}
	]
})

export default Beverage;
