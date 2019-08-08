class Friendship < ApplicationRecord
  validates :friend_id
  validates :user_id
  belongs_to :user
  belongs_to :friend, class_name: "User"

end
