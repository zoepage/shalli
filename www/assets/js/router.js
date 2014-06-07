/**
 * Main router file for Ember.js
 *
 * @link http://emberjs.com/guides/routing/
 */

ShallI.Router.map(function() {
    this.resource('decisions');
    this.resource('decision', { path: '/decision/:decision_id' });
    this.resource('decision.new', { path: '/decision/new'});
});

ShallI.DecisionNewRoute = Ember.Route.extend({
    model: function(){
        return this.store.createRecord('decision');
    },
    setupController : function(controller, model){
        controller.set('model', model);
    }
});