Lousing.ListingsNewRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('property_listing', {});
  },
  exit: function(){
    var model = this.get('currentModel');
    if(model.get('isNew') && !model.get('isSaving')) {
      return model.rollback();
    }
  },
});
