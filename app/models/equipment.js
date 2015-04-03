import DS from 'ember-data';

var Equipment = DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  description: DS.attr(),
  image: DS.attr()
});

Equipment.reopenClass({
	FIXTURES: [
		{ 
			id: "cocktail-glass",
			name: 'Cocktail Glass',
			type: 'glassware',
			description: '',
			image: 'images/cocktail-glass.jpg',
		},
		{ 
			id: "old-fashioned-glass",
			name: 'Old-Fashioned Glass',
			type: 'glassware',
			description: '',
			image: 'images/old-fashioned-glass.jpg',
		},
		{ 
			id: "highball-glass",
			name: 'Highball Glass',
			type: 'glassware',
			description: '',
			image: 'images/highball-glass.jpg',
		}

	]
});

export default Equipment;