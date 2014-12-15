class PropertyListingsUser < ActiveRecord::Base
  belongs_to :property_listing
  belongs_to :user

  validates_uniqueness_of :user_id, :scope => [:property_listing_id]
end
