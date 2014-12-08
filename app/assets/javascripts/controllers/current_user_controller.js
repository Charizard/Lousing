Lousing.CurrentUserController = Ember.ObjectController.extend({
  content: Ember.computed.alias('currentUser'),
  isSignedIn: function(){
    this.get('content') != null
  }.property('content')
});
