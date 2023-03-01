```ruby
class ArticlesController < ApplicationController
  # show an article
  def show
    article = Articles::FindService.call(articles_params[:article_id])

    render_json ArticleSerializer.new(article)
  end

  private

  # params permitted
  def articles_params
    params.permit(:article_id)
  end
end
```