Lousing.ListingsNewController = Ember.ObjectController.extend({
  actions: {
    submit: function(){
      var property_listing = this.store.createRecord('property_listing', {
        bhk: this.get('bhk'),
        address: this.get('address'),
        property_type: this.get('property_type'),
        buildup_area: this.get('buildup_area'),
        bathrooms: this.get('bathrooms'),
        furnish_type: this.get('furnish_type'),
        rent: this.get('rent'),
        security_deposit: this.get('security_deposit'),
        poster: this.get('currentUser')
      });

      var self = this;
      property_listing.save().then(function(){
        Lousing.Alert('success', "Successfully created the Property Listing.")

        self.set('bhk', undefined);
        self.set('address', undefined);
        self.set('property_type', undefined);
        self.set('buildup_area', undefined);
        self.set('bathrooms', undefined);
        self.set('furnish_type', undefined);
        self.set('rent', undefined);
        self.set('security_deposit', undefined);
      }, function(){
        alert('Not saved');
      });
    }
  }
});
