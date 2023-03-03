---
title: "chartman2.fr - RoR - Design pattern"
description:
    "Découvrez comment travailler avec Ruby on Rails, un framework web basé sur Ruby, en suivant les bonnes pratiques d'architecture et de développement - MVC, design patterns, services, procédures, serializer."
---
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