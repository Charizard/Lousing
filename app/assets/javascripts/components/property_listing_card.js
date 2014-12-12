Lousing.PropertyListingCardComponent = Ember.Component.extend({
  tagName: "p",
  classNames: "no-margin",
  action: "toggleShortlist",
  isShortlisted: function() {
    var self = this;

    return this.get('current_user.short_listed_properties').contains(this.get('property_listing'));
  }.property('property_listing.shortlisted_users.length'),
  actions: {
    toggleShortlist: function(){
      this.sendAction();
    }
  }
});
