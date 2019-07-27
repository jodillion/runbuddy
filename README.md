[![Codeship Status for jodillion/runbuddy](https://app.codeship.com/projects/fade9320-8975-0137-bb91-3e01594af01a/status?branch=master)](https://app.codeship.com/projects/354573)

#Kiburi#

Find your ideal running or cycling partner by browsing other people's Strava profiles. Send a match request and if you are matched in return, you will be able to chat in order to coordinate a time to meet up and go on a run or ride.

This React-Rails app allows users to sign in with Strava and then further
customize their own profile.

View it on Heroku at [Kiburi](www.kiburo.herokuapp.com)

##Setup##

Ruby Version 2.4.5
Rails Version 5.2.3

**Dependencies**
* omniauth-strava
* strava-ruby-client
* foundation-rails

**Database Creation and Initialion**
* $ rake db:create
* $ rake db:migrate

**Running the test suites**
* $ rspec
* $ yarn test
