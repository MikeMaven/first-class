Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :airports, only: [:index, :show, :new]
  resources :reviews, only: [:edit, :update, :destroy]

  namespace :api do
    namespace :v1 do
      resources :airports, only: [:index, :show, :create] do
        resources :reviews, only: [:index, :create]
      end
      resources :votes, only: [:create, :update]
      resources :reviews, only: [:show] do
        resources :votes, only: [:index]
      end
    end
  end
end
