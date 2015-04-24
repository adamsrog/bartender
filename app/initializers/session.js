import Ember from 'ember';
import Firebase from 'firebase';

var session = Ember.Object.extend({
	ref: new Firebase('https://fiery-torch-7549.firebaseio.com'),

	addFirebaseCallback: function() {
		var session = this;

		this.get('ref').onAuth(function(authData) {
			if (authData) {
				session.set('isAuthenticated', true);
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
