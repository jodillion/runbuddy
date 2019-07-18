Rails.application.routes.draw do
  root 'profiles#index'
  devise_for :users
  resources :profiles, only: [:index, :show, :new]

  namespace :api do
    namespace :v1 do
      resources :profiles, only: [:index, :show, :create]
    end
  end
end
