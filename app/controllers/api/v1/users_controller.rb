require 'httparty'

class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    users = User.all
    render json: users
  end

  def show
    athleteId = params[:id]
    athlete = User.find(athleteId)
    strava_info =  HTTParty.get("https://www.strava.com/api/v3/athletes/#{athlete.uid}/stats?access_token=#{athlete.access_token}")
    render json: strava_info
  end

end
