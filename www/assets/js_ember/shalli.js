// initialize Hoodie
var hoodie  = new Hoodie();

window.ShallI = Ember.Application.create({
    currentPath: '',
});

/**
 * Ember hoodie datastore
 *
 * @link  https://github.com/gr2m/ember-hoodie-adapter
 */
ShallI.ApplicationAdapter = DS.HoodieAdapter.extend();