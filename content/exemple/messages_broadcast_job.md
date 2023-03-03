---
title: "chartman2.fr - RoR - Design pattern"
description:
    "Découvrez comment travailler avec Ruby on Rails, un framework web basé sur Ruby, en suivant les bonnes pratiques d'architecture et de développement - MVC, design patterns, services, procédures, serializer."
---

```ruby
# Send message to user
class MessagesBroadcastJob < ApplicationJob
  queue_as :default

  def subscribed
    stream_from "current_user_#{current_user.id}"
  end

  def perform(receiver_id, message)
    ActionCable.server.broadcast "current_user_#{receiver_id}", {
      message: MessageSerializer.new(message)
    }
  end
end
```