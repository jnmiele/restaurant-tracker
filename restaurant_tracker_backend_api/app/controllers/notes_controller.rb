class NotesController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    restaurant = Restaurant.find_or_create_by(name: note_params[:restaurant])
    @note = Note.create(user_id: note_params[:user_id], title: note_params[:title], body: note_params[:body], restaurant_id: restaurant.id)
    render json: @note
  end

  def destroy
    note = Note.find(params[:note_id])
    note.delete
  end

  private
  def note_params
    params.require(:note).permit(:user_id, :restaurant, :title, :body)
  end
end