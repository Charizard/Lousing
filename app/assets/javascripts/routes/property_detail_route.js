Lousing.PropertyDetailRoute = Ember.Route.extend({
  model: function(param) {
    return this.store.find('property_listing', param.listing_id)
  }
});
