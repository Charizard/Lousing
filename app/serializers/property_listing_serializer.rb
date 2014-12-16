class PropertyListingSerializer < ApplicationSerializer
  include ActionView::Helpers::DateHelper

  attributes :id, :bhk, :address, :property_type, :buildup_area, :bathrooms,
             :furnish_type, :rent, :security_deposit, :created_at, :poster_id,
             :image_url, :is_shortlisted, :is_created
  has_many :shortlisted_users, embed: :ids, :include => true, :root => "users"

  def created_at
    time_ago_in_words object.created_at
  end

  def is_shortlisted
    object.is_shortlisted_by_user(scope.id)
  end

  def is_created
    object.poster_id == scope.id
  end
end
