Lousing.PropertyListingController = Ember.ObjectController.extend({
  isShortlisted: function() {
    var self = this;

    return this.currentUser.get('short_listed_properties').contains(this.get('model'));
  }.property('shortlisted_users.length'),
  actions: {
    toggleShortlist: function(){
      var shortlist = this.store.createRecord('property_shortlisting', {
        user: this.currentUser,
        property_listing: this.get('model')
      });

      var self = this;
      shortlist.save().then(
        function(property_shortlist){
          // We are associating the shortlisted_users of the property_listing
          // directly to the user, we need to create it.
          self.currentUser.get('short_listed_properties').
            addObject(self.get('model'));
          Lousing.Alert('success', "Successfully shortlisted the property");
        },
        function(){
          Lousing.Alert('danger', "Cannot shortlist the property");
          shortlist.rollback();
        }
      );

      return false;
    }
  }
});
