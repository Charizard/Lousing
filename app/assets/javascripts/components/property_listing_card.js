Lousing.PropertyListingCardComponent = Ember.Component.extend({
  tagName: "p",
  classNames: "no-margin",
  actions: {
    toggleShortlist: function(){
      if(!this.get('propertyListing.isShortlisted')) {
        var self = this;

        var propertyShortlisting = this.get('targetObject.store').createRecord('property_shortlisting', {
          user: this.currentUser,
          property_listing: this.get('propertyListing')
        });

        propertyShortlisting.save().then(
          function(){
            self.set('propertyListing.isShortlisted', true);
          }
          , function(){
            Lousing.Alert('danger', "Cannot shortlist the property");
            propertyShortlisting.rollback();
          }
        );
      } else {
        var propertyListing = this.get('propertyListing');
        var propertyShortlisting = propertyListing.get('property_shortlisting');

        var self = this;

        propertyShortlisting.destroyRecord().then(
          function(response){
            self.set('propertyListing.isShortlisted', false);
          },
          function(){
            Lousing.Alert('danger', "Cannot shortlist the property");
          }
        );
      }
    }
  }
});
