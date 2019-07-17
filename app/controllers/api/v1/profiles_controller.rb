class Api::V1::ProfilesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, except: [:index, :show]

  def index
    profiles = Profile.all
    render json: profiles
  end

  def show
  end

end
