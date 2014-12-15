Lousing.ListingsNewRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('property_listing', {});
  },
  exit: function(){
    var model = this.get('currentModel');
    if(model.get('isNew') && !model.get('isSaving')) {
      return model.rollback();
    }
  },
  actions: {
    create: function(){
      var newListing = this.get('currentModel');
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
    }
  }
});
