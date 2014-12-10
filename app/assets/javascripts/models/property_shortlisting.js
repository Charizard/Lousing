Lousing.PropertyShortlisting = DS.Model.extend({
  user: DS.belongsTo('user'),
  property: DS.belongsTo('property_listing')
});
