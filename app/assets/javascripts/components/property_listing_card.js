Lousing.PropertyListingCardComponent = Ember.Component.extend({
  tagName: "p",
  classNames: "no-margin",
  action: "toggleShortlist",
  isShortlisted: function() {
    var self = this;
    // Why is the following commented line not working, but the line below it is working perfectly fine?
    // return this.get('current_user.short_listed_properties').contains(this.get('property_listing'));
    return this.get('current_user.short_listed_properties').map(function(p){ return p.get('id');}).contains(this.get('property_listing.id'));
  }.property('property_listing.shortlisted_users.length'),
  actions: {
    toggleShortlist: function(){
      this.sendAction();
    }
  }
});
