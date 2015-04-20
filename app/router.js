import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('beverage', function() {
    this.route('view', { path: '/:beverage_id' });
  });
  this.resource('ingredient', function() {
    this.route('view', { path: '/:ingredient_id' });
  });
  this.resource('equipment', function() {
    this.route('view', { path: '/:equipment_id' });
  });
});