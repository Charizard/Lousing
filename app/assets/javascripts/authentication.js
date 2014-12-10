Lousing.allowLandlord = function(self, transition) {
  if(self.currentUser.get('is_landlord')) {
    return true;
  } else {
    transition.abort();
    Lousing.Alert('danger', "You need to be a Landlord to access the page");
  }
}
