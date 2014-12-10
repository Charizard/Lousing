Lousing.ListingsNewRoute = Ember.Route.extend({
  beforeModel: function(transition){
    return Lousing.allowLandlord(this, transition);
  }
});
