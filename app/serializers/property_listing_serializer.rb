class PropertyListingSerializer < ApplicationSerializer
  attributes :id, :bhk, :address, :property_type, :buildup_area, :bathrooms, :furnish_type, :rent, :security_deposit, :poster_id, :created_at
end
