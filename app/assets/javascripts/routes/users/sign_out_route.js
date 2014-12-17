Lousing.UsersSignOutRoute = Ember.Route.extend({
  beforeModel: function() {
    return Lousing.SignOut();
  }
});
