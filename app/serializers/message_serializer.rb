class MessageSerializer < ActiveModel::Serializer
  attributes :body, :user, :chat_id, :id

  def user
    object.user
  end

end
