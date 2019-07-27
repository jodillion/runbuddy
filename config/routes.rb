Rails.application.routes.draw do
  root 'homes#index'
  resources :homes, only: [:index]
  resources :users, only: [:index]

  get '/auth/strava/callback', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
end
