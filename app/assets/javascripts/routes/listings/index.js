Lousing.ListingsIndexRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('property_listing', function(property){
      return property.get('isCreated');
    });
  }
});
