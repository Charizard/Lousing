class PropertyListingsController < ApplicationController
  def index
    render :json => PropertyListing.all, current_user_id: current_user.id
  end

  def create
    property_listing = PropertyListing.new(property_listing_params)
    if property_listing.save
      render :json => property_listing, current_user_id: current_user.id
    else
      render :text => "#{property_listing.errors.full_messages}", :status => :unprocessable_entity
    end
  end

  def update
    property_listing = PropertyListing.find(params[:id])
    if property_listing.update_attributes(property_listing_params)
      render :json => property_listing, current_user_id: current_user.id
    else
      render :text => "#{property_listing.errors.full_messages}", :status => :unprocessable_entity
    end
  end

  def contact_agent
    render :json => {}
  end

  private

  def property_listing_params
    params.require(:property_listing).permit(:bhk, :address, :property_type, :buildup_area, :bathrooms, :furnish_type, :rent, :security_deposit, :poster_id)
  end
end
