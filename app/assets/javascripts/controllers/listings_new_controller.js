Lousing.ListingsNewController = Ember.ObjectController.extend({
  actions: {
    create: function(){
      var newListing = this.get('model');
      newListing.set('poster', this.currentUser);

      var self = this;
      newListing.save().then(
        function(){
          self.transitionTo('index');
          Lousing.Alert('success', "Successfully created the Property Listing");
        },
        function(){
          Lousing.Alert('danger', "Cannot create Listing");
        }
      );

      return false;
    }
  }
});
