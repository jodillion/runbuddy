class SessionsController < ApplicationController

  def create
    @user = User.find_or_create_from_auth_hash(auth_hash)
    cookies.signed["user.id"] = @user.id
    cookies.signed["user.expires_at"] = 30.days.from_now
    session[:user_id] = @user.id
    redirect_to root_path
  end

  def destroy
    session[:user_id] = nil

    cookies.signed["user.id"] = nil
    cookies.signed["user.expires_at"] = nil

    flash[:notice] = "Logged out"
    redirect_to root_path
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
