
Rails.application.routes.draw do
  root 'homes#index'
  resources :homes, only: [:index]
  resources :users, only: [:index, :show]
  resources :chats, only: [:index]

  get '/auth/strava/callback', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      get "users/current" => "users#the_current_user"
      resources :users, only: [:index, :show]
      post 'users/search', to: 'users#search'
    end
  end
end
