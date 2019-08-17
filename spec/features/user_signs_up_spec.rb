require 'rails_helper'

feature 'user registers', %Q{
  As a visitor
  I want to register
  So that I can create an account
} do

 scenario 'sign up through Strava account' do
   visit root_path
   click_link 'Sign In'

   expect(page).to have_current_path(root_path)
   expect(page).to have_content('Sign Out')
   expect(page).to have_content('Browse Profiles')
 end
end
