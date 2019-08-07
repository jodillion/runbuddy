class UsersController < ApplicationController
  before_action :authenticate_user
  protect_from_forgery with: :null_session

  def index
  end

  def show
  end

  private

  def authenticate_user
    if !logged_in?
      redirect_to "/auth/strava"
    end
  end

end
