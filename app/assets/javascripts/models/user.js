Lousing.User = DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  isLandlord: DS.attr('boolean'),
  shortListedProperties: DS.hasMany('property_shortlisting', { async: false })
});
