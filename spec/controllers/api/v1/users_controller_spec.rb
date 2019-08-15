require 'rails_helper'
require 'shared_contexts'
include Warden::Test::Helpers

RSpec.describe Api::V1::UsersController, type: :controller do
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

  describe "index" do
    it "Should return all of the users in the database except the current user" do
      session[:user_id] = User.find_by(firstname: "Luna").id
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["users"].length).to eq 1

      expect(returned_json["users"][0]["firstname"]).to eq "Fred"
      expect(returned_json["users"][0]["lastname"]).to eq "Weasley"
      expect(returned_json["users"][0]["profile"]).to eq "http://images4.wikia.nocookie.net/__cb20101113121321/harrypotter/images/4/49/Luna_profile.jpg"
      expect(returned_json["users"][0]["city"]).to eq "Denver"
      expect(returned_json["users"][0]["state"]).to eq "CO"
      expect(returned_json["users"][0]["sex"]).to eq "M"
    end
  end

  describe "show" do
    it "Should return test_user2 and their stats" do
      session[:user_id] = User.find_by(firstname: "Luna").id
      get :show, params: {id: test_user2.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["user"]["firstname"]).to eq "Fred"
      expect(returned_json["user"]["lastname"]).to eq "Weasley"
      expect(returned_json["user"]["profile"]).to eq "http://images4.wikia.nocookie.net/__cb20101113121321/harrypotter/images/4/49/Luna_profile.jpg"
      expect(returned_json["user"]["city"]).to eq "Denver"
      expect(returned_json["user"]["state"]).to eq "CO"
      expect(returned_json["user"]["sex"]).to eq "M"
    end
  end
end
