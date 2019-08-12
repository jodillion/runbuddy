require 'rails_helper'

RSpec.describe Api::V1::FriendshipsController, type: :controller do
  describe "POST#create" do
    let!(:test_user1){User.create(
      id: 1,
      access_token: "345fdinhf8968332317987dflku121",
      provider: "Strava",
      uid: 12345,
      firstname: "Luna",
      lastname: "Lovegood",
      profile: "http://images1.wikia.nocookie.net/__cb20101007152411/harrypotter/images/1/18/PHELPS2-1.jpg",
      city: "Moab",
      state: "UT",
      sex: "F"
    )}

    let!(:test_user2){User.create(
      id: 2,
      access_token: "123fdinhf8968367237654dflku429",
      provider: "Strava",
      uid: 12346,
      firstname: "Fred",
      lastname: "Weasley",
      profile: "http://images4.wikia.nocookie.net/__cb20101113121321/harrypotter/images/4/49/Luna_profile.jpg",
      city: "Denver",
      state: "CO",
      sex: "M"
    )}

    let!(:friendship_hash){
      {
        user_id: test_user1.id,
        friend_id: test_user2.id,
      }
    }

    it "should add a friendship relationship to the database" do
      expect{
        post :create,
        params: {
          user_id: test_user1.id,
          friend_id: test_user2.id,
          friendship: friendship_hash
        }
      }.to change { Friendship.count }.by 1
    end
  end
end
