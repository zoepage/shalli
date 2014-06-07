// initialize Hoodie
var hoodie  = new Hoodie();

window.ShallI = Ember.Application.create();

/**
 * Ember hoodie datastore
 *
 * @link  https://github.com/gr2m/ember-hoodie-adapter
 */
ShallI.ApplicationAdapter = DS.HoodieAdapter.extend();

window.hoodie.account.on('signout', function (user) {
    window.location.href = 'login.html';
});

window.hoodie.account.on('unauthenticated', function (user) {
    window.location.href = 'login.html';
});

window.hoodie.account.on('signin', function (user) {
    $('html').attr('data-hoodie-account-status', 'signedin');
    $('.hoodie-accountbar').find('.hoodie-username').text(username).attr('color', 'red');
    alert('DRIN');
});
