import DS from 'ember-data';
import Ember from 'ember';

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
		}
	]
});

export default Ingredient;