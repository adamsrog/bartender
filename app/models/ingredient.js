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
		},
		{
			id: 'campari',
			name: 'Campari',
			type: 'aperitif',
			description: 'Campari is an alcoholic liqueur, considered an apéritif, obtained from the infusion of herbs and fruit in alcohol and water. It is a bitter characterised by its dark red colour.',
			equivalents: []
		},
		{
			id: 'limoncello',
			name: 'Limoncello',
			type: 'liqueur',
			description: 'Limoncello is an Italian lemon liqueur mainly produced in Southern Italy, especially in the region around the Gulf of Naples, the Sorrentine Peninsula and the coast of Amalfi, and islands of Procida, Ischia, and Capri.',
			equivalents: []
		},
		{
			id: 'mandarine-napoleon',
			name: 'Mandarine Napoléon',
			type: 'liqueur',
			description: 'The orange liqueur was created for Napoleon Bonaparte in late 1700s or very early 1800s and was first sold to the public in 1892.',
			equivalents: ['cointreau','triple-sec']
		},
		{
			id: 'lime-peel-spiral',
			name: 'Lime Peel Spiral',
			type: 'garnish',
			description: '',
			equivalents: []
		},
		{
			id: 'cointreau',
			name: 'Cointreau',
			type: 'liqueur',
			description: '',
			equivalents: ['triple-sec']
		},
		{
			id: 'triple-sec',
			name: 'Triple Sec',
			type: 'liqueur',
			description: '',
			equivalents: ['cointreau']
		},
		{
			id: 'blue-curacao',
			name: 'Blue Curaçao',
			type: 'liqueur',
			description: 'Curaçao is a liqueur flavored with the dried peel of the laraha citrus fruit, grown on the island of Curaçao. A non-native plant similar to an orange, the laraha developed from the sweet Valencia orange transplanted by Spanish explorers.',
			equivalents: ['']
		},
		{
			id: 'apricot-brandy',
			name: 'Apricot Brandy',
			type: 'liquor',
			description: '',
			equivalents: []
		},
		{
			id: 'lemon-juice',
			name: 'Lemon Juice',
			type: 'juice',
			description: '',
			equivalents: []
		},
		{
			id: 'sugar',
			name: 'Sugar',
			type: 'sweetener',
			description: '',
			equivalents: []
		},
		{
			id: 'blackberry',
			name: 'Blackberry',
			type: 'fruit',
			description: '',
			equivalents: []
		},
		{
			id: 'blackberry-liqueur',
			name: 'Blackberry Liqueur',
			type: 'liqueur',
			description: '',
			equivalents: []
		},
		{
			id: 'lime-wedge',
			name: 'Lime Wedge',
			type: 'fruit',
			description: '',
			equivalents: []
		},
		{
			id: 'dry-vermouth',
			name: 'Dry Vermouth',
			type: 'aperitif',
			description: '',
			equivalents: []
		},
		{
			id: 'sweet-vermouth',
			name: 'Sweet Vermouth',
			type: 'aperitif',
			description: '',
			equivalents: []
		}


	]
});

export default Ingredient;