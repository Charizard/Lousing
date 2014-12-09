class PropertyListingsController < ApplicationController
  def index
    render :json => PropertyListing.all
  end
end
