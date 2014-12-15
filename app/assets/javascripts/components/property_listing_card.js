Lousing.PropertyListingCardComponent = Ember.Component.extend({
  tagName: "p",
  classNames: "no-margin",
  actions: {
    toggleShortlist: function(){
      if(!this.get('property_listing.isShortlisted')) {
        var self = this;
        $.post(
          '/property_shortlistings',
          { property_shortlisting: { user_id: this.currentUser.get('id'), property_listing_id: this.get('property_listing.id') } },
          function(property_shortlist){
            self.set('property_listing.isShortlisted', true);
            self.get('property_listing.shortlisted_users')
                .addObject(self.get('currentUser'));
          },
          "json"
        ).fail( function(){
            Lousing.Alert('danger', "Cannot shortlist the property");
            shortlist.rollback();
        });
      } else {
        var property_listing = this.get('property_listing');

        var self = this;
        $.ajax({
          url: 'property_shortlistings/destroy_shortlisting',
          type: "DELETE",
          data: { property_shortlisting: { user_id: this.currentUser.get('id'), property_listing_id: this.get('property_listing.id') } },
          success: function(response){
            self.set('property_listing.isShortlisted', false);
            self.get('property_listing.shortlisted_users')
                .removeObject(self.get('currentUser'));
          },
          error: function(){
            Lousing.Alert('danger', "Cannot shortlist the property");
          }
        });
      }

    }
  }
});
