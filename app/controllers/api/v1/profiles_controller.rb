class Api::V1::ProfilesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, except: [:index, :show]

  def index
    profiles = Profile.all
    render json: profiles
  end

  def show
    profile = Profile.find(params["id"])
    render json: profile
  end

  def create
    profile = Profile.new(profile_params)
    profile.user = current_user
    if profile.save
      render json: { profile: profile }
    else
      render json: {error: profile.errors.full_messages }
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:first_name, :age, :gender, :zipcode)
  end
end
