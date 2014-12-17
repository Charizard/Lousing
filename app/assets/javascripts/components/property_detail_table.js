Lousing.PropertyDetailTableComponent = Ember.Component.extend({
  shortlistedCount: Ember.computed.alias('propertyListing.shortlistedUsers.length'),
  pluralizeCount: function(){
    return (this.get('shortlisted_count') == 1) ? "person" : "people";
  }.property('shortlistedCount'),
  actions: {
    contact_agent: function(){
      var self = this;
      $.post(
        'property_listings/contact_agent',
        function(){
          Lousing.Alert('success', "Sent an email to the agent ("+ self.get('property_listing.poster.email') +")");
        },
        "json"
      )
    }
  }
});
