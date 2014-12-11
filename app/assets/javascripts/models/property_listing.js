Lousing.PropertyListing = DS.Model.extend({
  bhk: DS.attr('number'),
  address: DS.attr('string'),
  property_type: DS.attr('string'),
  buildup_area: DS.attr('number'),
  bathrooms:  DS.attr('number'),
  furnish_type: DS.attr('string'),
  rent: DS.attr('number'),
  security_deposit: DS.attr('number'),
  created_at: DS.attr('string'),
  shortlisted_users: DS.hasMany('users', { async: true, inverse: 'short_listed_properties'}),
  poster: DS.belongsTo('user')
});
