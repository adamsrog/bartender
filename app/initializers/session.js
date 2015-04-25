import Ember from 'ember';
import Firebase from 'firebase';

// convenience method for getting user's information based on the provider
function parseAuthData(authData) {
	var parsedData = {};
	switch(authData.provider) {

		case 'facebook':
			parsedData.provider = authData.provider;
			parsedData.id = authData.facebook.id;
			parsedData.displayName = authData.facebook.displayName;
			parsedData.gender = authData.facebook.cachedUserProfile.gender;
			parsedData.language = authData.facebook.cachedUserProfile.locale;
			parsedData.imageThumbUrl = authData.facebook.cachedUserProfile.picture.data.url;
			parsedData.website = authData.facebook.cachedUserProfile.link;
			return parsedData;

		case 'github':
			parsedData.provider = authData.provider;
			parsedData.id = authData.github.id;
			parsedData.username = authData.github.username;
			parsedData.displayName = authData.github.displayName;
			parsedData.description = authData.github.cachedUserProfile.bio;
			parsedData.email = authData.github.email;
			parsedData.company = authData.github.cachedUserProfile.company;
			parsedData.location = authData.github.cachedUserProfile.location;
			parsedData.imageThumbUrl = authData.github.cachedUserProfile.avatar_url;
			parsedData.website = authData.github.cachedUserProfile.html_url;
			return parsedData;

		case 'google':
			parsedData.provider = authData.provider;
			parsedData.id = authData.google.id;
			parsedData.displayName = authData.google.displayName;
			parsedData.gender = authData.google.cachedUserProfile.gender;
			parsedData.language = authData.google.cachedUserProfile.locale;
			parsedData.imageThumbUrl = authData.google.cachedUserProfile.picture;
			parsedData.website = authData.google.cachedUserProfile.link;
			return parsedData;

		case 'twitter':
			parsedData.provider = authData.provider;
			parsedData.id = authData.twitter.id;
			parsedData.username = authData.twitter.username;
			parsedData.displayName = authData.twitter.displayName;
			parsedData.description = authData.twitter.cachedUserProfile.description;
			parsedData.location = authData.twitter.cachedUserProfile.location;
			parsedData.language = authData.twitter.cachedUserProfile.lang;
			parsedData.imageThumbUrl = authData.twitter.cachedUserProfile.profile_image_url_https || authData.twitter.cachedUserProfile.profile_image_url;
			parsedData.website = authData.twitter.cachedUserProfile.url;
			return parsedData;
	}
}

var session = Ember.Object.extend({
	ref: new Firebase('https://fiery-torch-7549.firebaseio.com'),

	addFirebaseCallback: function() {
		var session = this;
		var ref = this.get('ref');

		ref.onAuth(function(authData) {
			if (authData) {
				var user = parseAuthData(authData);
				session.set('isAuthenticated', true);
				session.set('user', user);
				ref.child('users').child(authData.uid).set(user);
			} else {
				session.set('isAuthenticated', false);
			}
		});
		
	}.on('init'),

	loginFacebook: function() {
		var session = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			session.get('ref').authWithOAuthPopup('facebook', function(error, user) {
				if (user) { resolve(user); }
				else { reject(error); }
			});
		});
	},

	loginGoogle: function() {
		var session = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			session.get('ref').authWithOAuthPopup('google', function(error, user) {
				if (user) { resolve(user); }
				else { reject(error); }
			});
		});
	},

	loginGitHub: function() {
		var session = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			session.get('ref').authWithOAuthPopup('github', function(error, user) {
				if (user) {	resolve(user); } 
				else { reject(error); }
			});
		});
	},

	loginTwitter: function() {
		var session = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			session.get('ref').authWithOAuthPopup('twitter', function(error, user) {
				if (user) { resolve(user); }
				else { reject(error); }
			});
		});
	},

	logout: function() {
		this.get('ref').unauth();
		location.reload();
	},

	currentUser: Ember.computed('isAuthenticated', function() {
		return this.get('ref').getAuth();
	})

});

export default {
	name: 'session',

	initialize: function(container, app) {
		app.register('session:main', session);
		app.inject('controller', 'session', 'session:main');
		app.inject('route', 'session', 'session:main');
	}
};
