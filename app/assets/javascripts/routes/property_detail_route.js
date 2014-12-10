Lousing.PropertyDetailRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    return Lousing.isLoggedIn(this, transition);
  },
  model: function(param) {
    return this.store.find('property_listing', param.listing_id)
  }
});
