---
title: "chartman2.fr - RoR - Design pattern"
description:
    "Découvrez comment travailler avec Ruby on Rails, un framework web basé sur Ruby, en suivant les bonnes pratiques d'architecture et de développement - MVC, design patterns, services, procédures, serializer."
---
```ruby
module Api
  module V1
    module Messages
      # Create a message
      class CreateService < ApplicationCallable
        def initialize(sender_id, body, receiver_id)
          @sender_id       = sender_id
          @body            = body
          @receiver_id     = receiver_id
        end

        def call
          message = Message.create!(sender: @sender_id, body: @body, receiver: @receiver_id)

          { success: true, payload: message }
        rescue ActiveRecord::RecordInvalid => invalid
          { success: false, errors: invalid.record.errors }
        end
      end
    end
  end
end
```