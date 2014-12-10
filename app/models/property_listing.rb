class PropertyListing < ActiveRecord::Base
  validates_presence_of :poster

  belongs_to :poster, :class_name => "User"
  has_and_belongs_to_many :short_listed_by, :class_name => "User"
end
