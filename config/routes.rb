Lousing::Application.routes.draw do
  devise_for :users, :controllers => { :sessions => "json_sessions" }
  root :to => 'assets#index'

  resources :property_listings, :only => [:index]
end
