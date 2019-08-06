class FriendshipsController < ApplicationController
  def create
    @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
    if @friendship.save
      flash[:notice] = "Sent friend request."
      redirect_to api_v1_user
    else
      flash[:error] = "Unable to send friend request."
      rediret_to api_v1_user
    end
  end

  def destroy
    @friendship = current_user.friendships.find(params[:id])
    @friendship.destroy
    flash[:notice] = "Successfully deleted friendship."
    redirect_to api_v1_user
  end
end
