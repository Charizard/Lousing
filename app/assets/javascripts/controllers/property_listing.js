Lousing.PropertyListingController = Ember.ObjectController.extend({
  isShortlisted: function() {
    var users = this.get('model').get('shortlisted_users');
    var self = this;
    return users.any(function(item){
      // window.item = item;
      console.log(item.get('user_id'));
      console.log(self.currentUser.get('id'));
      return item.get('user.id') === self.currentUser.get('id');
    });
  }.property('shortlisted_users.length'),
  actions: {
    toggleShortlist: function(){
      var shortlist = this.store.createRecord('property_shortlisting', {
        user: this.currentUser,
        property_listing: this.get('model')
      });

      shortlist.save();

      return false;
    }
  }
});
