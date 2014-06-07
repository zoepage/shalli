// initialize Hoodie
var hoodie  = new Hoodie();

window.ShallI = Ember.Application.create();

/**
 *
 * @TODO replace with hoodie
 * @link  https://github.com/gr2m/ember-hoodie-adapter
 */
ShallI.ApplicationAdapter = DS.FixtureAdapter.extend();

// Added this for version 0.14
ShallI.Store = DS.Store.extend({
   adapter: DS.RESTAdapter.create()
});