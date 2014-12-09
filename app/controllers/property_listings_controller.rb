class PropertyListingsController < ApplicationController
  def index
    render :json => PropertyListing.all
  end

  def create
    property_listing = PropertyListing.new(property_listing_params)
    if property_listing.save
      render :json => property_listing
    else
      render :text => "#{property_listing.errors.full_messages}", :status => :unprocessable_entity
    end
  end

  private

  def property_listing_params
    params.require(:property_listing).permit(:bhk, :address, :property_type, :buildup_area, :bathrooms, :furnish_type, :rent, :security_deposit, :poster_id)
  end
end
