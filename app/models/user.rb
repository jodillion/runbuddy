class User < ApplicationRecord
  validates :access_token, :provider, :uid, presence: true
  validates :access_token, :uid, uniqueness: true

  has_many :stats
  has_many :messages

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
