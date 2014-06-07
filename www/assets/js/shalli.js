// initialize Hoodie
var hoodie  = new Hoodie();

window.ShallI = Ember.Application.create();

/**
 * Ember hoodie datastore
 *
 * @link  https://github.com/gr2m/ember-hoodie-adapter
 */
ShallI.ApplicationAdapter = DS.FixtureAdapter.extend();