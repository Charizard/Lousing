Lousing.PropertyDetailTableComponent = Ember.Component.extend({
  shortlisted_count: Ember.computed.alias('property_listing.shortlisted_users.length'),
  pluralize_count: function(){
    return (this.get('shortlisted_count') == 1) ? "person" : "people";
  }.property('shortlisted_count'),
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
