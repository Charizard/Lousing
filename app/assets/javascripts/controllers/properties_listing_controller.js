Lousing.PropertiesListingController = Ember.ArrayController.extend({
  shortlistedProperties: function(){
    return this.get('model').filterBy('isShortlisted', true);
  }.property('@each.isShortlisted')
});
