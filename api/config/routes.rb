Rails.application.routes.draw do
  resources :product_properties
  resources :properties
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
