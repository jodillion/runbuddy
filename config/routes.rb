Rails.application.routes.draw do
  root 'profiles#index'
  devise_for :users
  resources :profiles, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :profiles, only: [:index, :show]
    end
  end
end
