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