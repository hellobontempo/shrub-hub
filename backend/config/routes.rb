Rails.application.routes.draw do
  resources :plant_collections, only: [:index, :create, :new]
  resources :collections, only: [:index, :create, :new]
  resources :plants, only: [:index, :create, :show]


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
