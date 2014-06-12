/**
 * Main router file for Ember.js
 *
 * @link http://emberjs.com/guides/routing/
 */

ShallI.Router.map(function() {
    this.resource('decisions');
    this.resource('decision', { path: '/decision/:decision_id' });
    this.resource('decision.new', { path: '/decision/new'});
    this.resource('yesDecision');
    this.resource('noDecision');
});

ShallI.ApplicationRoute = Ember.Route.extend({
    redirect: function() {
        if (!ShallI.get('currentPath') || ShallI.get('currentPath') === 'index') {
            this.transitionTo('decisions');
        }
    }
});

ShallI.DecisionNewRoute = Ember.Route.extend({
    model: function(){
        return this.store.createRecord('decision');
    },
    setupController: function(controller, model){
        controller.set('model', model);
    }
});

ShallI.DecisionRoute = Ember.Route.extend({
    model: function(pathParameter){
        return this.store.find('decision', pathParameter.decision_id);
    },
    setupController: function(controller, model) {
        controller.set('model', model);
    },
    afterModel: function(decision, transition) {
        if (decision.isCompleted) {
            alert("already done");
        }
    }
});

ShallI.DecisionsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('decision');
    }
});