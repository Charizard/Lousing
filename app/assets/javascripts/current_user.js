Ember.Application.initializer({
  name: 'currentUser',

  initialize: function(container) {
    var store = container.lookup('store:main');
    var attributes = $('meta[name="current-user"]').attr('content')

    if(attributes) {
      var user = store.push('user', store.serializerFor(Lousing.User).normalize(Lousing.User, JSON.parse(attributes)))

      container.register('user:current', user, { instantiate: false, singleton: true });

      container.typeInjection('controller', 'currentUser', 'user:current')
      container.typeInjection('route', 'currentUser', 'user:current')
    }
  }
});
