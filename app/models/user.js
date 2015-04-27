import DS from 'ember-data';

var User = DS.Model.extend({
	provider: DS.attr('string'),
	username: DS.attr('string'),
	displayName: DS.attr('string'),
	email: DS.attr('string'),
	company: DS.attr('string'),
	location: DS.attr('string'),
	gender: DS.attr('string'),
	description: DS.attr('string'),
  imageThumbUrl: DS.attr('string'),
	language: DS.attr('string'),
	website: DS.attr('string'),

	favoriteBeverages: DS.attr(),
	favoriteIngredients: DS.attr(),
	favoriteEquipment: DS.attr()
});

export default User;