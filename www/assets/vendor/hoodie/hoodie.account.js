$(function() {  
  // make sure that only one modal is visible
  
  
    $modal = $('#login');

    $modal.on('submit', function(event){
      event.preventDefault();
      event.stopPropagation();

      var inputs = {};
      var $form = $(event.target);

// rewirte -> single page application and use it!

      var usrV  = $('#usr').val();
      var pwV   = $('#pw').val();
      var pwVrep   = $('#pw2').val();
     
      if (pwVrep.length > 0) {
         fcn = hoodie.account.signUp(usrV, pwV, pwVrep);
      } else {
        var fcn = hoodie.account.signIn(usrV, pwV);
      };
 

      fcn.then(
          function(event, done) {

            $('body').removeClass('signedout').addClass('signedin');
            $('.hoodie-accountbar').find('.hoodie-username').text(hoodie.account.username); 
          
          }, function(event, error) {
            $('.bd').prepend('<div class="alert alert-error">Username or password are wrong!<br /><br /> Please try again!</div>');
      });

      
    });

    $('.logout').bind('click' , function(e){
      hoodie.account.signOut();
      $('body').removeClass('signedin').addClass('signedout');
    });
    
    var session = hoodie.account.hasValidSession();

    if(!session) {
        $('body').removeClass('signedin').addClass('signedout');
    } else {
      $('body').removeClass('signedout').addClass('signedin');
      $('.hoodie-accountbar').find('.hoodie-username').text(hoodie.account.username); 
    };

    hoodie.account.on('unauthenticated', function (user) { 
      alert('unautth') 
    });    

    hoodie.account.on('authenticated', function (user) {
      alert('auth');
    });
});
