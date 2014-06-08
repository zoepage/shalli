ShallI.ApplicationController = Ember.ObjectController.extend({
    /*init: function() {
    	this.transitionToRoute('discusions')
    },*/
    actions: {
        // Add actions here
    },
    updateCurrentPath: function() {
        ShallI.set('currentPath', this.get('currentPath'));
    }.observes('currentPath')

    // Add controller properties here
});