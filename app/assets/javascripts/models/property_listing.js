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
  image_url: DS.attr('string'),
  poster: DS.belongsTo('user', { async: true }),
  property_shortlisting: DS.belongsTo('property_shortlisting'),
  isShortlisted: DS.attr('boolean'),
  isCreated: DS.attr('boolean'),
  shortlisted_users: DS.hasMany('user')
});
