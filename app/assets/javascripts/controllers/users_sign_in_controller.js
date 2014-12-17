Lousing.UsersSignInController = Ember.Controller.extend({
  actions : {
    signIn: function() {
      var signInData = { user: { email: this.get('email'), password: this.get('password') } };
      var controller = this;
      return Ember.$.post('/users/sign_in', signInData,
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
