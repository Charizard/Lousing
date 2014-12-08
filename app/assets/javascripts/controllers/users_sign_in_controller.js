Lousing.UsersSignInController = Ember.Controller.extend({
  actions : {
    signIn: function() {
      var sign_in_data = { user: { email: this.get('email'), password: this.get('password') } };
      var controller = this;
      return Ember.$.post('/users/sign_in', sign_in_data,
        function(data) {
          var user = controller.store.createRecord('user', {
            email: data.email
          });

          controller.set('currentUser', user);
          window.location = "";
        },
        'json'
      ).fail(function(response) {
        alert(response.body);
      });
    }
  }
});
