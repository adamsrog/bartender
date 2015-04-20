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
		},
		{
			id: "absinthe-spoon",
			name: "Absinthe Spoon",
			type: "spoon",
			description: "A perforated or slotted spoon is used to dissolve a sugar cube in a glass of absinthe, usually to sweeten the drink and counteract its mild bitterness. The bowl of the spoon is normally flat, with a notch in the handle where it rests on the rim of the glass. Originating circa the 1860s, absinthe spoons were often stamped with brand names or logos as advertising, much like modern alcohol paraphernalia.",
			image: "images/absinthe-spoon.png"
		},
		{
			id: "bar-spoon",
			name: "Bar Spoon",
			type: "spoon",
			description: "A bar spoon is a long handled spoon used for mixing and layering of both alcoholic and non-alcoholic mixed drinks. Its length ensures that it can reach to bottom of the tallest jug or tumbler to mix ingredients directly in the glass.",
			image: ""
		},
		{
			id: "blender",
			name: "Blender",
			type: "mixer",
			description: "A blender consists of a blender jar with a rotating metal blade at the bottom, powered by an electric motor in the base. An ideal blender will have a powerful motor that is able to crush ice and puree fruit.",
			image: "images/blender.png"
		},
		{
			id: "boston-shaker",
			name: "Boston Shaker",
			type: "mixer",
			description: "A large steel, cone-shaped cup and smaller mixing glass combination preferred by bartenders.  The mixing glass fits into the steel cup and creates a sealed container for shaking.",
			image: ""
		},
		{
			id: "bottle-opener",
			name: "Bottle Opener",
			type: "tool",
			description: "Small tool used for opening bottles.",
			image: ""
		},
		{
			id: "champagne-stopper",
			name: "Champagne Stopper",
			type: "tool",
			description: "Spring loaded stopper designed to clamp tightly around the neck of a champagne bottle.  Helps conserve the carbonation or other sparkling bottled beverages after opening.",
			image: ""
		},
		{
			id: "citrus-juicer",
			name: "Citrus Juicer",
			type: "tool",
			description: "",
			image: ""
		},
		{
			id: "citrus-spout",
			name: "Citrus Spout",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "citrus-squeezer",
			name: "Citrus Squeezer",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "citrus-stripper",
			name: "Citrus Stripper",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "cocktail-shaker",
			name: "Cocktail Shaker",
			type: "mixer",
			description: "",
			image: ""
		},
		{
			id: "classic-corkscrew",
			name: "Classic Corkscrew",
			type: "corkscrew",
			description: "",
			image: ""
		},
		{
			id: "corkpuller",
			name: "Cork Puller (Butler's Friend)",
			type: "corkscrew",
			description: "",
			image: ""
		},
		{
			id: "lever-pull",
			name: "Lever Pull (Double-action Corkscrew)",
			type: "corkscrew",
			description: "",
			image: ""
		},
		{
			id: "screwpull",
			name: "Screwpull",
			type: "corkscrew",
			description: "",
			image: ""
		},
		{
			id: "sommeliers-corkscrew",
			name: "Sommelier's Corkscrew",
			type: "corkscrew",
			description: "",
			image: ""
		},
		{
			id: "winged-corkscrew",
			name: "Winged Corkscrew",
			type: "corkscrew",
			description: "",
			image: ""
		},
		{
			id: "cutting-board",
			name: "Cutting Board",
			type: "tool",
			description: "",
			image: ""
		},
		{
			id: "decanter",
			name: "Decanter",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "foil-cutter",
			name: "Foil Cutter",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "hawthorn-strainer",
			name: "Hawthorn Strainer",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "ice-bucket",
			name: "Ice Bucket",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "jigger",
			name: "Jigger",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "julep-cocktail-strainer",
			name: "Julep Cocktail Strainer",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "martini-pitcher",
			name: "Martini Pitcher",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "measuring-spoons",
			name: "Measuring Spoons",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "mixing-glass",
			name: "Mixing Glass",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "muddler",
			name: "Muddler",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "paring-knife",
			name: "Paring Knife",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "swizzle-sticks",
			name: "Swizzle Sticks",
			type: "",
			description: "",
			image: ""
		},
		{
			id: "wine-cooler",
			name: "Wine Cooler",
			type: "",
			description: "",
			image: ""
		}
	]
});

export default Equipment;