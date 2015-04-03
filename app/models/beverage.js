import Ember from 'ember';
import DS from 'ember-data';

var Beverage = DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  equipment: DS.belongsTo('equipment', {async: true}),
  image: Ember.computed('equipment', function() {
    var equipment = this.get('equipment');
    return equipment.get('image');
  }),
  description: DS.attr(),
  amounts: DS.attr(),
  ingredients: DS.hasMany('ingredient', {async: true}),
  steps: DS.attr(),
  tags: DS.attr(),
  similar: DS.hasMany('beverage', {async: true}),

  combined: Ember.computed('amounts', 'ingredients', function() {
    var amounts = this.get('amounts');
  	var ingredients = this.get('ingredients.content');
  	var combined = [];
  	ingredients.forEach(function(ingredient, index) {
      ingredient.set('amount', amounts[index].amount);
      ingredient.set('measurement', amounts[index].measurement);
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
      equipment: 'cocktail-glass',
      description: '',
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
      similar: []
    },
    {
      id: 'alexander',
      name: 'Alexander',
      type: 'cocktail',
      equipment: 'cocktail-glass',
      description: 'Dating from the 1920s, the original Alexander was made with gin, but the brandy version has become more popular.',
      amounts: [
        { amount: 1.0, measurement: 'oz' },
        { amount: 0.75, measurement: 'oz' },
        { amount: 0.75, measurement: 'oz' },
        { amount: 1, measurement: 'pinch' }
      ], 
      ingredients: ['gin','white-creme-de-cacao','heavy-cream','nutmeg'],
      steps: ['Shake the liquid ingredients vigorously with ice.','Strain into a chilled cocktail glass.','Sprinkle with nutmeg.'],
      tags: [],
      similar: ['avalanche']
    },
    {
      id: 'avalanche',
      name: 'Avalanche',
      type: 'cocktail',
      equipment: 'cocktail-glass',
      description: '',
      amounts: [
        { amount: 1.0, measurement: 'oz' },
        { amount: 0.75, measurement: 'oz' },
        { amount: 0.75, measurement: 'oz' },
        { amount: 1, measurement: 'pinch' }
      ], 
      ingredients: ['gin','brown-creme-de-cacao','heavy-cream','nutmeg'],
      steps: ['Shake the liquid ingredients vigorously with ice.','Strain into a chilled cocktail glass.','Sprinkle with nutmeg.'],
      tags: [],
      similar: ['alexander']
    },
    {
      id: 'Antibes',
      name: 'Antibes',
      type: 'cocktail',
      equipment: 'old-fashioned-glass',
      description: '',
      amounts: [
        { amount: 1.5, measurement: 'oz' },
        { amount: 0.50, measurement: 'oz' },
        { amount: 2, measurement: 'oz' },
        { amount: 1, measurement: 'slice' }
      ], 
      ingredients: ['gin','benedictine','grapefruit-juice','orange-slice'],
      steps: ['Shake the liquid ingredients vigorously with ice.','Strain into a chilled cocktail glass.','Garnish with orange slice.'],
      tags: [],
      similar: ['']
    },
    {
      id: 'arcadia',
      name: 'Arcadia',
      type: 'cocktail',
      equipment: 'cocktail-glass',
      description: '',
      amounts: [
        { amount: 1.5, measurement: 'oz' },
        { amount: 0.5, measurement: 'oz' },
        { amount: 0.5, measurement: 'oz' },
        { amount: 0.5, measurement: 'oz' }
      ], 
      ingredients: ['gin','galliano','creme-de-banane','grapefruit-juice'],
      steps: ['Shake the liquid ingredients vigorously with ice.','Strain into a chilled cocktail glass.'],
      tags: [],
      similar: ['']
    },
    {
      id: 'bali-highball',
      name: 'Bali Highball',
      type: 'cocktail',
      equipment: 'highball-glass',
      description: '',
      amounts: [
        { amount: 1.5, measurement: 'oz' },
        { amount: 2, measurement: 'oz' },
        { amount: 0.5, measurement: 'oz' },
        { amount: 1, measurement: 'oz' },
        { amount: 4, measurement: 'oz' },
        { amount: 1, measurement: '' },
        { amount: 1, measurement: '' },
      ], 
      ingredients: ['gin','guava-nectar','lime-juice','pomegranate-syrup', 'club-soda', 'lime-wheel', 'orange-blossom'],
      steps: ['Shake the gin, guava nectar, lime juice, and pomegranate syrup vigorously with ice.','Strain into an ice-filled highball glass.', 'Top with club soda.', 'Garnish with the lime wheel and orange blossom.'],
      tags: [],
      similar: ['']
    },
    {
      id: 'beauty-spot',
      name: 'Beauty Spot',
      type: 'cocktail',
      equipment: 'cocktail-glass',
      description: '',
      amounts: [
        { amount: 2, measurement: 'oz' },
        { amount: 0.5, measurement: 'oz' },
        { amount: 1, measurement: '' },
        { amount: 0.5, measurement: 'oz' }
      ], 
      ingredients: ['gin','white-creme-de-cacao','egg-white','grenadine'],
      steps: ['Shake the gin, créme de cacao, and egg white vigorously with ice.','Strain into a chilled cocktail glass.', 'Drop the grenadine in the center of the drink; do not stir.'],
      tags: [],
      similar: ['']
    }


	]
});

export default Beverage;
