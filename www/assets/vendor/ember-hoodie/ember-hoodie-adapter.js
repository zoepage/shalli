/*global Ember */
/*global DS */
/*global hoodie */
(function () {
  'use strict';

  function wrapJqueryPromise(jQueryPromise) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      jQueryPromise.then(function(json) {
        Ember.run(null, resolve, json);
      }, function(error) {
        Ember.run(null, reject, error);
      });
    });
  }

  DS.HoodieAdapter = DS.Adapter.extend(Ember.Evented, {

    init: function() {
      hoodie.remote.on('change', function() {
        console.log('handle change!', arguments)
      });
    },

    find: function(store, type, id/*, opts*/) {
      return wrapJqueryPromise( hoodie.store.find(type.typeKey, id) );

    },

    findAll: function (store, type) {
      return wrapJqueryPromise( hoodie.store.findAll(type.typeKey) );

    },

    createRecord: function (store, type, record) {
      return wrapJqueryPromise( hoodie.store.add(type.typeKey, record.toJSON()) );
    },

    updateRecord: function (store, type, record) {
      return wrapJqueryPromise( hoodie.store.update(type.typeKey, record.id, record.toJSON()) );
    },

    deleteRecord: function (store, type, record) {
      return wrapJqueryPromise( hoodie.store.remove(type.typeKey, record.id) );

    }
  });
}());
