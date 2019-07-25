class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # validates_presence_of :email, :password
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :strava_email, :provider, :uid, presence: true
  validates :strava_email, :provider, :uid, uniqueness: true

  def self.find_or_create_from_auth_hash(auth)
    User.find_or_create_by(provider: auth["provider"], uid: auth["extra"]["raw_info"]["id"]) do |user|
      user.access_token = auth["credentials"]["token"]
      user.strava_email = auth["info"]["email"]
      user.firstname = auth["info"]["first_name"]
      user.lastname = auth["info"]["last_name"]
      user.city = auth["extra"]["raw_info"]["city"]
      user.state = auth["extra"]["raw_info"]["state"]
      user.profile = auth["extra"]["raw_info"]["profile"]
      # user.profile_medium
      # user.sex
      # user.friend
      # user.follower
      # user.mutual_friend_count
      # user.clubs
      user.save!
    end
  end
end
