Lousing.PropertyDetailTableComponent = Ember.Component.extend({
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
