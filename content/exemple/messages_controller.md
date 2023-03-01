```ruby
module Api
  module V1
    # Messages management
    class MessagesController < ApplicationController
      def create
        @object = Api::V1::Messages::CreateProcedure.call messages_params

        if @object[:success]
          render json: ArticleSerializer.new(@object[:payload])
        else
          render json: @object[:errors], status: :precondition_failed
        end
      end

      private

      def messages_params
        params.required(:messages).permit(:sender_id, :body, :receiver_id)
      end
    end
  end
end
```