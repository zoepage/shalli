/**
 * Main router file for Ember.js
 *
 * @link http://emberjs.com/guides/routing/
 */

var Router = Backbone.Router.extend({
    routes: { 
        '' : 'home', 
        '/decision': 'decision' 
    } 
});