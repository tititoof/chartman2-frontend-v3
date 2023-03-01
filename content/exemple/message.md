```ruby
class Message < ApplicationRecord
  # --- Relationships ---
  belongs_to :sender, class_name: 'User'
  belongs_to :recipient, class_name: 'User'

  # --- Validations ---
  # Sender
  validates_presence_of :sender, message: 'sender_required'

  # Sender
  validates_presence_of :recipient, message: 'recipient_required'

  # Body
  validates_length_of :body, within: 1..255, too_long: 'body_too_long', too_short: 'body_too_short'
end
```