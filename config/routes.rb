Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :airports, only: [:index]

  namespace :api do
    namespace :v1 do
      resource :airports, only: [:show]
    end
  end
end
