Rails.application.routes.draw do
  resources :plant_collections
  resources :collections
  resources :plants
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
