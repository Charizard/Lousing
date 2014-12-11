Lousing.ListingsEditRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('property_listing', params.listing_id);
  }
});
