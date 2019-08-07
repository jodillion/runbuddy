class UserSerializer < ActiveModel::Serializer
  attributes :id, :uid, :firstname, :lastname, :profile, :city, :state, :profile_medium, :sex, :current_user
end
