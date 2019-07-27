require 'factory_bot'

FactoryBot.define do
  factory :user do
    provider { 'Strava' }
    uid { '12345' }
  end
  
end
