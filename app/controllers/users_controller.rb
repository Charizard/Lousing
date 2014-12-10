class UsersController < ApplicationController
  def logged_in_user
    if current_user
      render :json => current_user
    else
      render :text => "Not logged in", :status => :unprocessable_entity
    end
  end
end
