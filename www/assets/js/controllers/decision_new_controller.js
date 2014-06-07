ShallI.DecisionNewController = Ember.ObjectController.extend({
    actions: {
        createDecision: function() {
            /**
             * It is _really_ dirty to receive the form variables via jQuery
             * Maybe this is doable with a custom radio / input button view + rerender.
             *
             * But it is hackathon time. So we need minimum one dirty hack.
             * Here is the first one ...
             */
            var criteriaTexts = $('.criteria-text'),
                criteriaPoints = $('.criteria-point'),
                sample = new Array();

            for (var index = 0; index < criteriaTexts.length; ++index) {
                sample.push({
                    title: $(criteriaTexts[index]).attr('value'),
                    points: $(criteriaPoints[index]).attr('value')
                });
            }

            var decision = this.store.createRecord('decision', {
                title: this.get('model.title'),
                description: this.get('model.description'),
                url: this.get('model.url'),
                isCompleted: false,
                sample: sample,
                member: {},
                opinions: {}
            });

            // @TODO save more properties

            decision.save();

            this.transitionToRoute('decisions');
        }
    },

    hardcodedSamples: ShallISamples
});