require 'httparty'

class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    users = User.all
    render json: array_without_current_user(users)
  end

  def show
    user = User.find(params[:id])
    strava_info =  HTTParty.get("https://www.strava.com/api/v3/athletes/#{user.uid}/stats?access_token=#{user.access_token}")
    render json: { strava_info: strava_info, user: user }
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

end
