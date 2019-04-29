class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :overall_rating, :queue_time, :cleanliness, :wifi, :staff, :lounge_space, :airport_id, :score
end
