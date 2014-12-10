class PropertyListingsUser < ActiveRecord::Base
  belongs_to :property_listing
  belongs_to :user

  validates_uniqueness_of :user, :scope => [:property_listing]
end
