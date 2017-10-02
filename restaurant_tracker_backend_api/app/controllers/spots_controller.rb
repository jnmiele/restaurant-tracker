class SpotsController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    restaurant = Restaurant.find_or_create_by(
        name: params[:spot][:restaurant][:name], 
        address: params[:spot][:restaurant][:location],
        rating: params[:spot][:restaurant][:rating],
        price: params[:spot][:restaurant][:price],
        image_url: params[:spot][:restaurant][:image_url]
    )
    @user = User.find(params[:spot][:user_id])
    @spot = Spot.new(title: params[:spot][:title], body: params[:spot][:body])
    @spot.restaurant = restaurant
    @spot.user = @user
    @spot.save
    render json: @spot
  end

  def destroy
    spot = Spot.find(params[:spot_id])
    spot.delete
  end
end
