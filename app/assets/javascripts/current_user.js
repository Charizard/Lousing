Ember.Application.initializer({
  name: 'currentUser',

  initialize: function(container) {
    var store = container.lookup('store:main');

    $.ajax({
      url: 'users/logged_in_user.json',
      success: function(response) {
        if(response.user) {
          var user = store.push('user', store.serializerFor(Lousing.User).normalize(Lousing.User, response.user));

          container.register('user:current', user, { instantiate: false, singleton: true });

          container.typeInjection('controller', 'currentUser', 'user:current')
          container.typeInjection('route', 'currentUser', 'user:current')
        } else {
          console.log('User not logged in');
        }
      },
      failure: function() {
        console.log('A problem occured when fetching current_user');
      }
    })
  }
});
