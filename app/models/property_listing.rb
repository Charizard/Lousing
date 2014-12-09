class PropertyListing < ActiveRecord::Base
  belongs_to :poster, :class_name => "User"
end
