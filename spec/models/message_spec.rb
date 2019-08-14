require 'rails_helper'

RSpec.describe Message, type: :model do

  it { should belong_to(:chat) }
  it { should belong_to(:user) }

  it { should have_valid(:body).when("Hello!") }
  it { should_not have_valid(:body).when(nil) }

end
