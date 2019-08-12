
Rails.application.routes.draw do
  root 'homes#index'
  resources :homes, only: [:index]
  resources :users, only: [:index, :show]
  resources :chats, only: [:index]

  get '/auth/strava/callback', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index]
      resources :friendships, only: [:create]
      get "users/current" => "users#the_current_user"
      post 'users/search', to: 'users#search'
      resources :users, only: [:index, :show] do
        resources :friendships, only: [:create, :update, :destroy]
      end
    end
  end
end
