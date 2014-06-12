/**
 * Decision model
 *
 * This model represents one single decision.
 */
ShallI.Decision = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    url: DS.attr('string'),
    isCompleted: DS.attr('boolean'),
    // @TODO is it possible to store JSON here?
    sample: DS.attr(),
    // @TODO is it possible to store JSON here?
    member: DS.attr(),
    // @TODO is it possible to store JSON here?
    opinions: DS.attr()
});