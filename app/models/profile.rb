class Profile < ApplicationRecord
  validates_presence_of :first_name, :age, :zipcode, :gender
  belongs_to :user
end
