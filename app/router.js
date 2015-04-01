import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('beverage', function() {
    this.route('view', { path: '/beverage/:beverage_id' });
  });
});

export default Router;
