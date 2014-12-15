Lousing.User = DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  is_landlord: DS.attr('boolean'),
  // created_properties: DS.hasMany('property_listing', { inverse: 'poster' })
  // short_listed_properties: DS.hasMany('property_listing', { async: true, inverse: 'shortlisted_users' }),
});
