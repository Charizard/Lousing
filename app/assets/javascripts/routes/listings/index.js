Lousing.ListingsIndexRoute = Ember.Route.extend({
  model: function(){
    return this.currentUser.get('created_properties');
  }
});
