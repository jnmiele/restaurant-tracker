class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    user = User.new(username: params[:username], password: params[:password])
    if user.save
      token = encode_token({ user_id: user.id})
      render json: {user: user, jwt: token}
    else
    end
  end

  def show
    if @user
      render json: { user: @user, books: @user.books}
    else
      render json: { message: "Error"}
    end
  end

end
