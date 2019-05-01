Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :airports, only: [:index, :show, :new]
  resources :reviews, only: [:edit, :update, :destroy]
  resources :users, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :airports, only: [:index, :show, :create] do
        resources :reviews, only: [:index, :create]
      end
      resources :users, only: [:show] do
        resources :reviews, only: [:index]
      end
      resources :votes, only: [:create, :update]
    end
  end
end
