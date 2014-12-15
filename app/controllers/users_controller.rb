class UsersController < ApplicationController
  def logged_in_user
    if current_user
      render :json => current_user
    else
      render :json => { :error => "Not logged in" }
    end
  end

  def show
    render :json => User.find(params[:id])
  end
end
