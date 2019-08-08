require 'httparty'

class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user
  protect_from_forgery with: :null_session

  def index
    users = User.all
    render json: array_without_current_user(users)
  end

  def show
    user = User.find(params[:id])
    strava_info =  HTTParty.get("https://www.strava.com/api/v3/athletes/#{user.uid}/stats?access_token=#{user.access_token}")
    all_strava_info = {strava_info: strava_info, user: user, friendships: current_user.friendships, currentuser: current_user}
    render json: all_strava_info
  end

  def the_current_user
    current_user ||= User.find_by_id(session[:user_id])
    returned_current_user = {user_id: current_user.id, firstname: current_user.firstname}
    render json: returned_current_user
  end

  def search
    users = User.where("firstname ILIKE ? OR lastname ILIKE ? OR city ILIKE ? OR state ILIKE ? OR sex ILIKE ?", "%#{params['search_string']}%", "%#{params['search_string']}%", "%#{params['search_string']}%", "%#{params['search_string']}%", "%#{params['search_string']}%")
    render json: array_without_current_user(users)
  end

  private

  def array_without_current_user(users_array)
    new_array = users_array.select do |user|
      user != current_user
    end
    return new_array
  end

  def authenticate_user
    if !logged_in?
      render json: {message: "You do not have access to this page."}, status: 403
    end
  end

end
