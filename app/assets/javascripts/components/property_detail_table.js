Lousing.PropertyDetailTableComponent = Ember.Component.extend({
  shortlisted_count: Ember.computed.alias('property_listing.shortlisted_users.length'),
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
