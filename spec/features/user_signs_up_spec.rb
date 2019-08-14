require 'rails_helper'

feature 'user registers', %Q{
  As a visitor
  I want to register
  So that I can create an account
} do

 scenario 'sign up through Strava account' do
   binding.pry
   visit auth_strava_callback_path
   click_button 'Authorize'

   expect(page).to have_current_path(root_path)
   expect(page).to have_content('Sign Out')
   expect(page).to have_content('Browse Profiles')
 end
end
