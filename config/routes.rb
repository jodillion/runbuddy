Rails.application.routes.draw do
  root 'profiles#show'
  devise_for :users
  resources :profiles, only: [:show]
end
