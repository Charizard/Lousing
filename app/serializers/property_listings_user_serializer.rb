class PropertyListingsUserSerializer < ApplicationSerializer
  attributes :id, :user_id, :property_listing_id

  def root
    # Root needs to be same as the the Frontend model name in order for ember to understand it
    :property_shortlisting
  end
end
