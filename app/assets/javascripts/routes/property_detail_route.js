Lousing.PropertyDetailRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    if(this.currentUser) {
      return true;
    } else {
      transition.abort();
      this.transitionTo('users.sign_in');
      Lousing.Alert('danger', "You need to be a logged in to access the page");
    }
  },
  model: function(param) {
    return this.store.find('property_listing', param.listing_id)
  }
});
