ShallI.DecisionController = Ember.ObjectController.extend({
    actions: {
        submitDecision: function() {        	
        	var criteriaOpinions = $('.criteria-checkbox'),
        		opinions = Array();
        	
        	for (var index = 0; index < criteriaOpinions.length; index++) {
        		opinions.push({
        			opinion: $(criteriaOpinions[index]).attr('checked')
        		});
        	}
			
			var opinionsHashMap = {};
			opinionsHashMap[hoodie.account.username] = opinions;
        	
        	this.get('model').set('opinions', opinionsHashMap);

        	//  @TODO save more properties

        	this.get('model').save();

			this.transitionToRoute('decisions');
        }
        // Add actions here
    },

    username: hoodie.account.username

    // Add controller properties here
});
