Lousing.PropertyListing = DS.Model.extend({
  bhk: DS.attr('number'),
  address: DS.attr('string'),
  property_type: DS.attr('string'),
  buildup_area: DS.attr('number'),
  bathrooms:  DS.attr('number'),
  furnish_type: DS.attr('string'),
  rent: DS.attr('number'),
  security_deposit: DS.attr('number'),
  poster_id: DS.belongsTo('user'),
  created_at: DS.attr('date')
});
