class PropertyShortlistingsController < ApplicationController

  def create
    short_listing = PropertyListingsUser.new(property_shortlistings_params)
    if short_listing.save
      render :json => short_listing
    else
      render :text => "#{short_listing.errors.full_messages.join(', ')}", :status => :unprocessable_entity
    end
  end

  private

  def property_shortlistings_params
    params.require(:property_shortlisting).permit(:user_id, :property_listing_id)
  end

  def user
    @user ||= User.find(property_shortlistings_params[:user_id])
  end
end
