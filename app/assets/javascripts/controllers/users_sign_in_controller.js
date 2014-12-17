Lousing.UsersSignInController = Ember.Controller.extend({
  actions : {
    signIn: function() {
      var signInData = { user: { email: this.get('email'), password: this.get('password') } };
      return Lousing.SignIn(signInData);
    }
  }
});
