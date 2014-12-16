class UserSerializer < ApplicationSerializer
  embed :ids, :include => true
  attributes :id, :email, :name, :is_landlord

  has_many :property_listings_users, :root => "property_shortlistings", :key => "short_listed_property_ids"
end
