require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    subject { FactoryBot.create(:user) }
  end

  it { should have_valid(:provider).when("Strava") }
  it { should_not have_valid(:provider).when(nil, "")}

  it { should have_valid(:uid).when("12345") }
  it { should_not have_valid(:uid).when(nil, "")}

end
