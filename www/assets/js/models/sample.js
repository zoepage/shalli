/**
 * Decision model
 *
 * This model represents one single decision.
 */
ShallI.Sample = DS.Model.extend({
    title: DS.attr('string'),
    // @TODO is it possible to store JSON here?
    criteria: DS.attr()
});