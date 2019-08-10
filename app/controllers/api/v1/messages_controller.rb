class Api::V1::MessagesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    messages = Message.all
    render json: messages
  end

end
