// initialize Hoodie
var hoodie  = new Hoodie();

var router = new Router();
router.on('route:home', function(){
	hoodie.store.findAll('decision', function(object){
	}).done(function (objects) {
		objects.forEach(function(e){
			console.log(e.title)
		});
	});
});

Backbone.history.start();