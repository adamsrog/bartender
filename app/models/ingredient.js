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
		}
	]
});

export default Ingredient;