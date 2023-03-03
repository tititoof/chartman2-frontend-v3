---
title: "chartman2.fr - RoR - Design pattern"
description:
    "Découvrez comment travailler avec Ruby on Rails, un framework web basé sur Ruby, en suivant les bonnes pratiques d'architecture et de développement - MVC, design patterns, services, procédures, serializer."
---
```ruby
module Api
  module V1
    module Messages
      # Create a comment
      class CreateProcedure < ApplicationCallable
        def initialize(options)
          @sender_id       = options[:sender_id]
          @body            = options[:body]
          @receiver_id     = options[:receiver_id]
        end

        def call
          message = Api::V1::Messages::CreateService.call(@sender_id, @body, @receiver_id)

          MessagesBroadcastJob.perform_now @receiver_id, message[:payload]

          { success: true, payload: message[:payload] }
        rescue StandardError => e
          { success: false, errors: e.message }
        end
      end
    end
  end
end
```