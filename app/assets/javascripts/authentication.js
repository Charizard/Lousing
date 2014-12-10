Lousing.isLandlord = function(self, transition) {
  if(self.currentUser.get('is_landlord')) {
    return true;
  } else {
    transition.abort();
    Lousing.Alert('danger', "You need to be a Landlord to access the page");
  }
}

Lousing.isLoggedIn = function(self, transition) {
  if(self.currentUser) {
    return true;
  } else {
    transition.abort();
    self.transitionTo('users.sign_in');
    Lousing.Alert('danger', "You need to be a logged in to access the page");
  }
}
