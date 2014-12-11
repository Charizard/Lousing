class PropertyListingSerializer < ApplicationSerializer
  include ActionView::Helpers::DateHelper

  attributes :id, :bhk, :address, :property_type, :buildup_area, :bathrooms, :furnish_type, :rent, :security_deposit, :created_at, :poster_id, :image_url

  def created_at
    time_ago_in_words object.created_at
  end
end
