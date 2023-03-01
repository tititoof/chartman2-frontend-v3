```ruby
Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  namespace 'api' do
    namespace 'v1' do
      get '/article/:article_id', to: 'articles#show'
    end
    namespace 'v2' do
      get '/article/:article_id', to: 'articles#show'
    end
  end
end
```