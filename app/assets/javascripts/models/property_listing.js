Lousing.PropertyListing = DS.Model.extend({
  bhk: DS.attr('number'),
  address: DS.attr('string'),
  propertyType: DS.attr('string'),
  buildupArea: DS.attr('number'),
  bathrooms:  DS.attr('number'),
  furnishType: DS.attr('string'),
  rent: DS.attr('number'),
  securityDeposit: DS.attr('number'),
  createdAt: DS.attr('string'),
  imageUrl: DS.attr('string'),
  poster: DS.belongsTo('user', { async: true }),
  propertyShortlisting: DS.belongsTo('property_shortlisting'),
  isShortlisted: DS.attr('boolean'),
  isCreated: DS.attr('boolean'),
  shortlistedUsers: DS.hasMany('user')
});
