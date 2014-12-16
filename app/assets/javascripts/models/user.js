Lousing.User = DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  is_landlord: DS.attr('boolean'),
  short_listed_properties: DS.hasMany('property_shortlisting', { async: false })
});
