class UserSerializer < ApplicationSerializer
  attributes :id, :email, :name, :is_landlord, :short_listed_properties

  def short_listed_properties
    object.short_listed_property_ids
  end
end
