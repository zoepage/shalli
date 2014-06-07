// =================================================
// Hoodie Account Events
// =================================================

// listen for account events
// user has signed up (this also triggers the authenticated event, see below)
hoodie.account.on('signup', function (user) {
	console.log(user);
});

// user has signed in (this also triggers the authenticated event, see below)
hoodie.account.on('signin', function (user) {
	console.log(user);
});

// user has signed out
hoodie.account.on('signout', function (user) {
	console.log(user);
});

// user has re-authenticated after their session timed out (this does _not_ trigger the signin event)
hoodie.account.on('authenticated', function (user) {
	console.log(user);
});

// user's session has timed out. This means the user is still signed in locally, but Hoodie cannot sync remotely, so the user must sign in again
hoodie.account.on('unauthenticated', function (user) {
	console.log(user);
});


// =================================================
// Hoodie Store Events
// =================================================

// listen for store events
// new doc created
hoodie.store.on('add', function (newObject) {
	console.log(newObject);
});

// existing doc updated
hoodie.store.on('update', function (updatedObject) {
	console.log(updatedObject);
});

// doc removed
hoodie.store.on('remove', function (removedObject) {
	console.log(removedObject);
});

// any of the events above
hoodie.store.on('change', function (eventName, changedObject) {
	console.log(removedObject, changedObject);
});

// all listeners can be filtered by type
//hoodie.store.on('add:note',    function (newObject) {});
//hoodie.store.on('update:note', function (updatedObject) {});
//hoodie.store.on('remove:note', function (removedObject) {});
//hoodie.store.on('change:note', function (eventName, changedObject) {});

// ... and by type and id
//hoodie.store.on('add:uuid123:note',    function (newObject) {});
//hoodie.store.on('update:uuid123:note', function (updatedObject) {});
//hoodie.store.on('remove:uuid123:note', function (removedObject) {});
//hoodie.store.on('change:uuid123:note', function (eventName, changedObject) {});


// =================================================
// Hoodie Remote Events
// =================================================

// new doc created
hoodie.remote.on('add', function (newObject) {
	console.log(newObject);
});

// existing doc updated
hoodie.remote.on('update', function (updatedObject) {
	console.log(updatedObject);
});

// doc removed
hoodie.remote.on('remove', function (removedObject) {
	console.log(removedObject);
});

// any of the events above
hoodie.remote.on('change', function (eventName, changedObject) {
	console.log(eventName, changedObject);
});

// all listeners can be filtered by type
//hoodie.remote.on('add:note',    function (newObject) {});
//hoodie.remote.on('update:note', function (updatedObject)  {});
//hoodie.remote.on('remove:note', function (removedObject) {});
//hoodie.remote.on('change:note', function (eventName, changedObject) {});

// ... and by type and id
//hoodie.remote.on('add:uuid123:note',    function (newObject) {});
//hoodie.remote.on('update:uuid123:note', function (updatedObject)  {});
//hoodie.remote.on('remove:uuid123:note', function (removedObject) {});
//hoodie.remote.on('change:uuid123:note', function (eventName, changedObject) {});