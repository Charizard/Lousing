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
        poster: this.get('currentUser'),
      });

      property_listing.save().then(function(){
        console.log('saved successfully');
      }, function(){
        alert('Not saved');
      });
    }
  }
});
