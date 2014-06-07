ShallI.DecisionNewController = Ember.ObjectController.extend({
    actions: {
        createDecision: function() {
            var decision = this.store.createRecord('decision', {
                title: this.get('model.title'),
                description: this.get('model.description')
            });

            // @TODO save more properties

            decision.save();

            this.transitionToRoute('decisions');
        }
        // Add actions here
    }

    // Add controller properties here
});
