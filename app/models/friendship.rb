class Friendship < ApplicationRecord
  validates :friend_id, uniqueness: true
  validates :user_id, uniqueness: true
  belongs_to :user
  belongs_to :friend, class_name: "User"

end
