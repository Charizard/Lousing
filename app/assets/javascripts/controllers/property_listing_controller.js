Lousing.PropertyListingController = Ember.ObjectController.extend({
  actions: {
    toggleShortlist: function(){
      if(!this.get('model.isShortlisted')) {
        var self = this;
        $.post(
          '/property_shortlistings',
          { property_shortlisting: { user_id: this.currentUser.get('id'), property_listing_id: this.get('model.id') } },
          function(property_shortlist){
            self.set('isShortlisted', true);
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
            self.set('isShortlisted', false);
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
