class PropertyListing < ActiveRecord::Base
  validates_presence_of :poster

  belongs_to :poster, :class_name => "User"

  has_many :property_listings_users
  has_many :short_listed_by, :through => :property_listings_users, :source => :user

  # Callbacks
  before_create :generate_dummy_image_url

  def generate_dummy_image_url
    image_numbers = (1..5).to_a

    self.image_url = "/#{image_numbers.sample}.jpg"
  end

  def is_shortlisted_by_user(user_id)
    PropertyListingsUser.where(
      :user_id => user_id,
      :property_listing_id => self.id
    ).exists?
  end

  def shortlisted_users
    short_listed_by
  end
end
