class PropertyListingsUser < ActiveRecord::Base
  belongs_to :property_listing
  belongs_to :user
end
