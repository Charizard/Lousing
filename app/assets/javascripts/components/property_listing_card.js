Lousing.PropertyListingCardComponent = Ember.Component.extend({
  tagName: "p",
  classNames: "no-margin",
  action: "toggleShortlist",
  actions: {
    toggleShortlist: function(){
      this.sendAction();
    }
  }
});
