FactoryBot.define do
  factory :user do
    access_token "345fdinhf8968332317987dflku121"
    provider "Strava"
    uid 12345
    firstname "John"
    lastname "Smith"
    profile "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F61%2Fa6%2Fe3%2F61a6e3c77596ca560fe24ed9bba09058.jpg&f=1"
    city "Cincinnati"
    state "OH"
    country "United States"
  end
end
