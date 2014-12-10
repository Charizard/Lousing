Lousing.PropertiesListingController = Ember.ArrayController.extend({
  actions: {
    toggleShortlist: function(propertyListing){
      var shortlist = this.store.createRecord('property_shortlisting', {
        user: this.currentUser,
        property: propertyListing
      });

      shortlist.save();

      return false;
    }
  }
});
