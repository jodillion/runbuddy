class Api::V1::FriendshipsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    friendship = Friendship.new(user_id: params[:friendship][:user_id], friend_id: params[:friendship][:friend_id])
    payload = {"friendship": friendship}
    if friendship.save
      render json: payload
    else
      render json: {message: "Friend request not sent."}
    end
  end

  private

  def friend_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end

end
