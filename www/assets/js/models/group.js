/**
 * Group model
 *
 */
ShallI.Group = DS.Model.extend({
    name: DS.attr('string')
    // @TODO we have to create a user model with a hasMany relation
    // @link http://emberjs.com/api/data/classes/DS.html#toc_one-to-many
    //user: DS.hasMany('user')
});