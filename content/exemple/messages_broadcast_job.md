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