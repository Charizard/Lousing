class PropertyListing < ActiveRecord::Base
  belongs_to :poster, :class_name => "User"

  validates_presence_of :poster
end
