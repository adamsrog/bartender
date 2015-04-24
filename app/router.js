import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('beverage', function() {
    this.route('view', { path: '/:beverage_id' });
    this.route('new');
  });
  this.route('ingredient', function() {
    this.route('view', { path: '/:ingredient_id' });
    this.route('new');
  });
  this.route('equipment', function() {
    this.route('view', { path: '/:equipment_id' });
    this.route('new');
  });
  this.route('about');
});