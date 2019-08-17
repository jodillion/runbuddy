require 'rails_helper'

feature 'user signs out', %Q{
  As an authenticated user
  I want to sign out
  So that my identify is forgotten about on the machine I'm using
 } do

  scenario 'authenticated user signs out' do
    visit root_path
    click_link 'Sign In'

    expect(page).to have_current_path(root_path)
    expect(page).to have_content('Sign Out')
    expect(page).to have_content('Browse Profiles')

    click_link 'Sign Out'
    expect(page).to have_content('Logged out')
    expect(page).to have_content('Sign In')
    expect(page).to_not have_content('Browse Profiles')
  end
end
