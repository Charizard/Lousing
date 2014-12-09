Lousing.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('property_listing');
  }
});
