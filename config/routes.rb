Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  resources :homes, only: [:index]

  get '/auth/strava/callback', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
end
