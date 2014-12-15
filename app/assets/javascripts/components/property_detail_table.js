Lousing.PropertyDetailTableComponent = Ember.Component.extend({
  actions: {
    contact_agent: function(){
      var property_listing = this.get('model');

      $.post(
        'property_listings/contact_agent',
        function(){
          Lousing.Alert('success', "Sent an email to the agent");
        },
        "json"
      )
    }
  }
});
