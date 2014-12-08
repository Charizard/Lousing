// For more information see: http://emberjs.com/guides/routing/

Lousing.Router.map(function() {
  this.resource('users', function(){
    this.route('sign_in');
    this.route('sign_out');
  });
});
