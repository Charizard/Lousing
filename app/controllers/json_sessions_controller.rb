class JsonSessionsController < Devise::SessionsController

 def create
    user = User.find_for_database_authentication(email: params[:user][:email])

    if user && user.valid_password?(params[:user][:password])
      sign_in user
      render json: user, status: :created
    else
      render text: "invalid email or password", status: :unprocessable_entity
    end
  end

  def destroy
    sign_out :user
    render json: {}, status: :accepted
  end
end
