class User < ApplicationRecord
  validates :access_token, :provider, :uid, presence: true
  validates :access_token, :uid, uniqueness: true

  has_many :stats
  has_many :messages
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :inverse_friendships, class_name: "Friendship", foreign_key: "friend_id"
  has_many :inverse_friends, through: :inverse_friendships, source: :user

  def all_friendships
    friends.concat(inverse_friends)
  end

  def self.find_or_create_from_auth_hash(auth)
    User.find_or_create_by(provider: auth["provider"], uid: auth["extra"]["raw_info"]["id"]) do |user|
      user.access_token = auth["credentials"]["token"]
      user.firstname = auth["info"]["first_name"]
      user.lastname = auth["info"]["last_name"]
      user.city = auth["extra"]["raw_info"]["city"]
      user.state = auth["extra"]["raw_info"]["state"]
      user.profile = auth["extra"]["raw_info"]["profile"]
      user.profile_medium = auth["extra"]["raw_info"]["profile_medium"]
      user.sex = auth["extra"]["raw_info"]["sex"]
      user.save!
    end
  end
end
