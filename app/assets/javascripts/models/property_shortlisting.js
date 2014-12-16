Lousing.PropertyShortlisting = DS.Model.extend({
  user: DS.belongsTo('user'),
  property_listing: DS.belongsTo('property_listing')
});
