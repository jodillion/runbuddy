[![Codeship Status for jodillion/runbuddy](https://app.codeship.com/projects/fade9320-8975-0137-bb91-3e01594af01a/status?branch=master)](https://app.codeship.com/projects/354573)

# Kiburi

Find your ideal running or cycling partner by browsing other people's Strava profiles. Send a match request and if you are matched in return, you will be able to chat in order to coordinate a time to meet up and go on a run or ride.

This React-Rails app allows uses OmniAuth to allow users to sign in with their Strava account.
Users are then stored with Postgres SQL, with their running statistics displayed through the
third party Strava API. The ability to chat in real time is made possible through Action Cable.

View it on Heroku at [Kiburi](www.kiburo.herokuapp.com)

## Setup

Ruby Version 2.4.5

Rails Version 5.2.3

**Dependencies**
* omniauth-strava
* strava-ruby-client
* foundation-rails

**Database Creation and Initialion**


`rake db:create`

`rake db:migrate`

**Running the test suites**


Tests are written with RSpec, Capybara, Enzyme, and Jasmine.

`rspec`

`yarn test`

## How Kiburi Works

Sign up and create your profile by linking your account with Strava.


![sign up](public/images/OmniAuth.png)\n\n



Browse other people's profiles to help find your best match.


![browse profiles](public/images/BrowseProfilesMedium.png)



Click on each profile to see more details about that person.


![example profile](public/images/MyProfile.png)



When you find someone who might be a match, click "Contact Now".


That person will receive a notification of a match, and can choose to accept or deny.


If they accept, you will both be invited to a private chatroom where you can get to know each other and coordinate further details.


Meet for a run with your new running partner!

## In Progress/Current Bugs

* The chat feature does not function properly yet. It seems to be a problem with the Warden Hooks I'm using to store the cookies for the user session integrating with the OmniAuth session data.
* I do not currently have a way to send match requests but will be establishing self joins between the users table and friendships along with some logic that will hide the chat until a user accepts a match request from another user.
* Photos that are uploaded by users directly to Strava are displayed at a much lower resolution than photos users that have their Strava accounts linked to their Facebook or Google accounts. I plan to implement CarrierWave with AWS cloud storage in the future to allow users to upload their own photos.
