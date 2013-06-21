Portfolio::Application.routes.draw do
  #devise_for :users
  root :to => 'blog#index'
  match "/" => 'blog#index'
  match "" => 'blog#index'
  match "/album/:id/delete"  => "albums#destroy", as: :album_destroy
  match "/photo/:id/delete"  => "photos#destroy", as: :photo_destroy
  resources :blog

  resources :admin

  resources :photos

  resources :albums
  devise_for :users do
    get '/users/sign_out' => 'devise/sessions#destroy'
    get '/users/sign_in'  => 'devise/sessions#new'
    get '/users/sign_up'  => 'devise/sessions#destroy'
  end

  post 'album' => 'albums#index'
  # The priority is based upon order of creation:
  # first created -> highest priorit
  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
