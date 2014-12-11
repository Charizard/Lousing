Lousing::Application.routes.draw do
  devise_for :users, :controllers => { :sessions => "json_sessions" }
  root :to => 'assets#index'

  resources :users, :only => [] do
    get :logged_in_user, :on => :collection
  end
  resources :property_listings, :only => [:index, :create, :update]
  resources :property_shortlistings, :only => [:create] do
    delete :destroy_shortlisting, :on => :collection
  end
end
