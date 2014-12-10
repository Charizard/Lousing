Lousing.ListingsNewRoute = Ember.Route.extend({
  beforeModel: function(transition){
    // return Lousing.isLoggedIn(this, transition) && Lousing.isLandlord(this, transition);
  }
});
