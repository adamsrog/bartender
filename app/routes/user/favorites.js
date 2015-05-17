import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var ref = this.get('session.ref');
		var uid = this.get('session.uid');
		var test;

		ref.child('users').child(uid).child('favoriteBeverages').on('value', function(snapshot) {
			console.log('snap:', snapshot.val());
			test = snapshot.val();
		});
		console.log('test', test);
		// ref.child('users').child(uid).child('favoriteBeverages').update({
		// 	'abbey-cocktail': true
		// });
		console.log(this.get('session').uid);
		return this.store.find('user', this.get('session').uid);
	}
});
