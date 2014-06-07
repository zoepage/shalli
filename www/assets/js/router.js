/**
 * Main router file for Ember.js
 *
 * @link http://emberjs.com/guides/routing/
 */

ShallI.Router.map(function() {
	this.resource('decisions', function() {
		this.resource('new'),
		this.resource('decisions_id')
	}),
});