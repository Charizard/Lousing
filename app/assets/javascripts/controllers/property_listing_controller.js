Lousing.PropertyListingController = Ember.ObjectController.extend({
  isShortlisted: function() {
    var self = this;

    return this.currentUser.get('short_listed_properties').contains(this.get('model'));
  }.property('shortlisted_users.length'),
  actions: {
    toggleShortlist: function(){
      if(this.get('model.shortlisted_users.length') == 0) {
        var self = this;
        $.post(
          '/property_shortlistings',
          { property_shortlisting: { user_id: this.currentUser.get('id'), property_listing_id: this.get('model.id') } },
          function(property_shortlist){
            // We are associating the shortlisted_users of the property_listing
            // directly to the user, we need to create it.
            self.currentUser.get('short_listed_properties').
              addObject(self.get('model'));
          },
          "json"
        ).fail( function(){
            Lousing.Alert('danger', "Cannot shortlist the property");
            shortlist.rollback();
        });
      } else {
        var property_listing = this.get('model');

        var self = this;
        $.ajax({
          url: 'property_shortlistings/destroy_shortlisting',
          type: "DELETE",
          data: { property_shortlisting: { user_id: this.currentUser.get('id'), property_listing_id: this.get('model.id') } },
          success: function(response){
            // We had associated the shortlisted_users of the property_listing
            // directly to the user, we need to remove it.
            self.currentUser.get('short_listed_properties').
              removeObject(property_listing);
          },
          error: function(){
            Lousing.Alert('danger', "Cannot shortlist the property");
          }
        });
      }

      return false;
    }
  }
});
