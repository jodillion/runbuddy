class UserSerializer < ActiveModel::Serializer
  attributes :id, :uid, :firstname, :lastname, :profile, :city, :state, :sex, :messages

  def messages
    chat = Chat.find_by(user_id: object.id)

    if chat == nil
      chat = Chat.create(user_id: object.id)
    end

    user_messages = []
    chat.messages.each do |message|
      user_messages << MessageSerializer.new(message)
    end
    return user_messages
  end

end
