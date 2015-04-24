import Ember from 'ember';

export default Ember.Route.extend({
	actions: {

		loginFacebook: function() {
			var controller = this;
			controller.get('session').loginFacebook().then(function(user) {
				console.log(user);
			});
		},

		loginGithub: function() {
			var controller = this;
			controller.get('session').loginGitHub().then(function(user) {
				console.log(user);
			});
		},

		loginGoogle: function() {
			var controller = this;
			controller.get('session').loginGoogle().then(function(user) {
				console.log(user);
			});
		},

		loginTwitter: function() {
			var controller = this;
			controller.get('session').loginTwitter().then(function(user) {
				console.log(user);
			});
		},

		logout: function() {
			this.get('session').logout();
		}
	}
});
