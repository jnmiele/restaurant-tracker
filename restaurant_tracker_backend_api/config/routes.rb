Rails.application.routes.draw do

  post '/signup', to: 'users#create'
  post '/login', to: 'auth#create'
  get '/users/:id', to: 'users#show'
  get '/', to: 'application#welcome'
  post '/notes', to: 'notes#create'
  delete '/notes', to: 'notes#destroy'
  post '/yelp', to: 'yelp#fetch'
end


# users/:id/notes
# users/:id/restaurants