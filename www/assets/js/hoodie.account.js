$(function() {  
  // make sure that only one modal is visible
  
  
    $modal = $('#login');

    $modal.on('submit', function(event){
      event.preventDefault();
      event.stopPropagation();

      var inputs = {};
      var $form = $(event.target);

      alert($('#usr').val());

// rewirte -> single page application and use it!
      hoodie.account.signIn( $('#usr').val(), $('#pw').val() ).then(
          function(event, done) {
            alert('drin');
            window.location.href = 'index.html';   
            
            /* -- showing hoodie-accountbar and handling event ---
            $('html').attr('data-hoodie-account-status', 'signedin');
            $('.hoodie-accountbar').find('.hoodie-username').text(hoodie.account.user).attr('color', 'red');
            */
      }, function(event, error) {
        $('.bd').prepend('<div class="alert alert-error">Username or password are wrong!<br /><br /> Please try again!</div>');
      });

      
    });

    hoodie.account.on('signin', function (user) {
      window.location.href = "index.html";       
    });

    hoodie.account.on('signout', function (user) {
       window.location.href = 'login.html';
    });


    hoodie.account.on('unauthenticated', function (user) { 
      alert('unautth') 
    });    
    
});

window.hoodie.account.on('signout', function (user) {
  window.location.href = 'login.html';
});



window.hoodie.account.on('signin', function (user) {
    $('html').attr('data-hoodie-account-status', 'signedin');
    $('.hoodie-accountbar').find('.hoodie-username').text(username).attr('color', 'red');
    alert('DRIN');
});
