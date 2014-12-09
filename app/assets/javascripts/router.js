// For more information see: http://emberjs.com/guides/routing/

Lousing.Router.map(function() {
  this.resource('users', function(){
    this.route('sign_in');
    this.route('sign_out');
  });

  this.resource('property_detail', { path: "listing/:listing_id" });
  this.resource('listings', function(){
    this.route('new');
  });
});
