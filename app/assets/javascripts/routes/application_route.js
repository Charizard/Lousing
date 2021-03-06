Lousing.ApplicationRoute = Ember.Route.extend({
  actions: {
    isLandlord: function(self, transition) {
      if(self.currentUser.get('isLandlord')) {
        return true;
      } else {
        transition.abort();
        Lousing.Alert('danger', "You need to be a Landlord to access the page");
      }
    }
  },

  model: function() {
    if(this.currentUser){
      return this.store.findAll('property_listing');
    }
  }
});
