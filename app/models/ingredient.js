import DS from 'ember-data';
import Ember from 'ember';

//a dash = 1/48th oz (0.0208333 oz)
var Ingredient = DS.Model.extend({
  name: DS.attr(),
  text: Ember.computed.alias('name'),
  type: DS.attr(),
  description: DS.attr(),
  equivalents: DS.hasMany('ingredient')
});

Ingredient.reopenClass({
	FIXTURES: [
		{
			id: 'vodka',
			name: 'Vodka',
			type: 'liquor',
			description: '',
			equivalents: []
		},
		{
			id: 'rum',
			name: 'Rum',
			type: 'liquor',
			description: '',
			equivalents: []
		},
		{
			id: 'scotch',
			name: 'Scotch',
			type: 'liquor',
			description: '',
			equivalents: []
		},
		{
			id: 'whiskey',
			name: 'Whiskey',
			type: 'liquor',
			description: '',
			equivalents: []
		},
		{
			id: 'bourbon',
			name: 'Bourbon',
			type: 'liquor',
			description: '',
			equivalents: []
		},
		{
			id: 'gin',
			name: 'Gin',
			type: 'liquor',
			description: '',
			equivalents: []
		},
		{
			id: 'lillet-blanc',
			name: 'Lillet Blanc',
			type: 'aperitif',
			description: '',
			equivalents: []
		},
		{
			id: 'orange-juice',
			name: 'Fresh Orange Juice',
			type: 'juice',
			description: '',
			equivalents: []
		},
		{
			id: 'angostura-bitters',
			name: 'Angostura Bitters',
			type: 'bitters',
			description: '',
			equivalents: []
		},
		{
			id: 'maraschino-cherry',
			name: 'Maraschino Cherry',
			type: 'garnish',
			description: '',
			equivalents: []
		},
		{
			id: 'white-creme-de-cacao',
			name: 'White Créme De Cacao',
			type: 'liqueur',
			description: '',
			equivalents: []
		},
		{
			id: 'brown-creme-de-cacao',
			name: 'Brown Créme De Cacao',
			type: 'liqueur',
			description: '',
			equivalents: []
		},
		{
			id: 'heavy-cream',
			name: 'Heavy Cream',
			type: 'cream',
			description: '',
			equivalents: []
		},
		{
			id: 'nutmeg',
			name: 'Nutmeg (freshly grated)',
			type: 'spice',
			description: '',
			equivalents: []
		},
		{
			id: 'benedictine',
			name: 'Bénédictine',
			type: 'liqueur',
			description: '',
			equivalents: []
		},
		{
			id: 'grapefruit-juice',
			name: 'Fresh Grapefruit Juice',
			type: 'juice',
			description: '',
			equivalents: []
		},
		{
			id: 'orange-slice',
			name: 'Orange Slice',
			type: 'garnish',
			description: '',
			equivalents: []
		},
		{
			id: 'galliano',
			name: 'Galliano',
			type: 'liqueur',
			description: '',
			equivalents: []
		},
		{
			id: 'creme-de-banane',
			name: 'Créme De Banane',
			type: 'liqueur',
			description: '',
			equivalents: []
		},
		{
			id: 'guava-nectar',
			name: 'Guava Nectar',
			type: 'juice',
			description: '',
			equivalents: []
		},
		{
			id: 'lime-juice',
			name: 'Fresh Lime Juice',
			type: 'juice',
			description: '',
			equivalents: []
		},
		{
			id: 'pomegranate-syrup',
			name: 'Pomegranate Syrup',
			type: 'Syrup',
			description: '',
			equivalents: []
		},
		{
			id: 'club-soda',
			name: 'Club Soda',
			type: 'soda',
			description: '',
			equivalents: []
		},
		{
			id: 'lime-wheel',
			name: 'Lime Wheel',
			type: 'garnish',
			description: '',
			equivalents: []
		},
		{
			id: 'orange-blossom',
			name: 'Orange Blossom',
			type: 'garnish',
			description: '',
			equivalents: []
		},
		{
			id: 'egg-white',
			name: 'Egg White',
			type: 'other',
			description: '',
			equivalents: []
		},
		{
			id: 'grenadine',
			name: 'Grenadine',
			type: 'syrup',
			description: '',
			equivalents: []
		}
		
	]
});

export default Ingredient;