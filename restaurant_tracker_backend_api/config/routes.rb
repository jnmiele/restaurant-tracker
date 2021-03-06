Rails.application.routes.draw do

  post '/signup', to: 'users#create'
  post '/login', to: 'auth#create'
  get '/users/:id', to: 'users#show'
  get '/', to: 'application#welcome'
  post '/spots', to: 'spots#create'
  delete '/spots', to: 'spots#destroy'
  post '/yelp', to: 'yelp#fetch'
end
