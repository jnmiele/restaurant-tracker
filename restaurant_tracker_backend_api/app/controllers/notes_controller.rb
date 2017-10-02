class NotesController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    restaurant = Restaurant.find_or_create_by(
        name: params[:note][:restaurant][:name], 
        address: params[:note][:restaurant][:location],
        rating: params[:note][:restaurant][:rating],
        price: params[:note][:restaurant][:price],
        image_url: params[:note][:restaurant][:image_url]
    )
    @user = User.find(params[:note][:user_id])
    @note = Note.new(title: params[:note][:title], body: params[:note][:body])
    @note.restaurant = restaurant
    @note.user = @user
    @note.save
    render json: @note
  end

  def destroy
    note = Note.find(params[:note_id])
    note.delete
  end
end


class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :body
      t.integer :user_id
      t.integer :restaurant_id
      t.timestamps
    end
  end
end
