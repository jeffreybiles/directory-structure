import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('folders', function() {
    this.route('folder', {path: ':folder_id'});
  });
});

export default Router;
