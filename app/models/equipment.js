import DS from 'ember-data';

var Equipment = DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  usedWith: DS.hasMany('beverage', {async: true})
});

Equipment.reopenClass({
	FIXTURES: [
		{ 
			id: "cocktail-glass",
			name: 'Cocktail Glass',
			type: 'glassware',
			description: '',
			image: 'images/cocktail-glass.jpg',
			usedWith: []
		},
		{ 
			id: "old-fashioned-glass",
			name: 'Old-Fashioned Glass',
			type: 'glassware',
			description: '',
			image: 'images/old-fashioned-glass.jpg',
			usedWith: []
		},
		{ 
			id: "highball-glass",
			name: 'Highball Glass',
			type: 'glassware',
			description: '',
			image: 'images/highball-glass.jpg',
			usedWith: []
		}


	]
});

export default Equipment;