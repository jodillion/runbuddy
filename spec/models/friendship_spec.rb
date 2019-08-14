require 'rails_helper'

RSpec.describe Friendship, type: :model do

  it { should belong_to(:user) }
  it { should belong_to(:friend) }

  it { should have_valid(:user).when(User.new) }
  it { should_not have_valid(:user).when(nil) }

  it { should have_valid(:friend).when(User.new) }
  it { should_not have_valid(:friend).when(nil)}

end
