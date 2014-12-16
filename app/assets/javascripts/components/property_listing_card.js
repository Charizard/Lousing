Lousing.PropertyListingCardComponent = Ember.Component.extend({
  tagName: "p",
  classNames: "no-margin",
  actions: {
    toggleShortlist: function(){
      if(!this.get('property_listing.isShortlisted')) {
        var self = this;

        var property_shortlisting = this.get('targetObject.store').createRecord('property_shortlisting', {
          user: this.currentUser,
          property_listing: this.get('property_listing')
        });

        property_shortlisting.save().then(
          function(property_shortlist){
            self.set('property_listing.isShortlisted', true);
          }
          , function(){
            Lousing.Alert('danger', "Cannot shortlist the property");
            shortlist.rollback();
          }
        );
      } else {
        var property_listing = this.get('property_listing');
        var property_shortlisting = property_listing.get('property_shortlisting');

        var self = this;

        property_shortlisting.destroyRecord().then(
          function(response){
            self.set('property_listing.isShortlisted', false);
          },
          function(){
            Lousing.Alert('danger', "Cannot shortlist the property");
          }
        );
      }
    }
  }
});
