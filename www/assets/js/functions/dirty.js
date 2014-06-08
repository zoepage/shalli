/**
 * This is the place for really dirty jQuery function,
 * because i do not have a clue how to do such a logic in Ember :D
 *
 * It is hackathon time ...
 * If you want to see real hackathon hacks ... read this file.
 * You will cry ... in a few minutes ...
 */

function addSampleCriteria(sampleValue) {
    var chosenSample;

    // Choose sample
    $(ShallISamples).each(function(key, val) {
        if (val.id == sampleValue) {
            chosenSample = val;
        }
    });

    // Remove all fields
    $('.sample-criteria').empty();

    // Add all criteria
    var title = $('<div></div>').html(chosenSample.title),
        text,
        points,
        newDiv;

    $('.sample-criteria').append(title);

    $(chosenSample.criteria).each(function(key, val) {
        text = $('<input>').attr('type', 'text')
                    .attr('class', 'criteria-text')
                    .attr('name', 'criteria[' + key + '][title]')
                    .attr('value', val.title);
        points = $('<input>').attr('type', 'hidden')
                    .attr('class', 'criteria-point')
                    .attr('name', 'criteria[' + key + '][points]')
                    .attr('value', val.points);

        newDiv = $('<div></div>').append(text, points);
        $('.sample-criteria').append(newDiv);
    });

    $('.sample-criteria-list').show();
}

function addActiveClassToCritera(element) {
    $(element).parent("li.criteria").addClass('active');
}