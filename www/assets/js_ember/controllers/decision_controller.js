ShallI.DecisionController = Ember.ObjectController.extend({
    actions: {
        submitDecision: function() {        	
        	var criteriaOpinions = $('.criteria-checkbox'),
        		opinions = Array();

            var sample = this.get('sample'),
                sum = 0;

            /**
             * ATTENTION!
             * HIGHLY HACKATHON CODE
             * JUST MAKE THIS WORK. NO PRODUCTION CODE!
             */

            for (var index = 0; index < criteriaOpinions.length; index++) {

                if ($(criteriaOpinions[index]).prop('checked')) {
                    sum += parseInt(sample[index].points);
                }

                opinions.push({
                    opinion: $(criteriaOpinions[index]).prop('checked')
                });
            }

            console.log('sum', sum);
            if (sum > 0) {
                // Yeah!
                console.log('DO IT! Go for it! Ship it!');
                this.transitionToRoute('yesDecision');
                scrollTo('#yes-decision');

            } else {
                // No :(
                console.log('DONT IT! It will kill five kittens!');
                this.transitionToRoute('noDecision');
                scrollTo('#no-decision');
            }
			/*
			var opinionsHashMap = {};
			opinionsHashMap[hoodie.account.username] = opinions;
        	
        	this.get('model').set('opinions', opinionsHashMap);

        	//  @TODO save more properties

        	this.get('model').save();
            */
			//this.transitionToRoute('decisions');
        }
        // Add actions here
    },

    username: hoodie.account.username

    // Add controller properties here
});
