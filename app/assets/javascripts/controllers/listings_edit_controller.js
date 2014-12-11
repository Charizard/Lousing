Lousing.ListingsEditController = Ember.Controller.extend({
  actions: {
    update: function() {
      var property_listing = this.get('model');
      var self = this;
      property_listing.save().then(
        function(){
          self.transitionTo('listings.index');
          Lousing.Alert("success", 'Property Listing successfully update.');
        },
        function(){
          Lousing.Alert("danger", 'Property Listing successfully update.');
        }
      );
    }
  }
});
