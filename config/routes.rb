Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  resources :profiles, only: [:index, :show, :new]
  resources :homes, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :profiles, only: [:index, :show, :create]
    end
  end
end
