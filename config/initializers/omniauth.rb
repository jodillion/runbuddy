Rails.application.config.middleware.use OmniAuth::Builder do
  provider :strava, ENV['STRAVA_CLIENT_ID'], ENV['STRAVA_SECRET_KEY'], scope: 'read'
end
