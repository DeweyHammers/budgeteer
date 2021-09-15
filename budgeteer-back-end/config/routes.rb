Rails.application.routes.draw do
  resource :sessions, only: [:create]
  resource :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  resources :budgets
end