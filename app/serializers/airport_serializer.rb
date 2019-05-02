class AirportSerializer < ActiveModel::Serializer
  attributes :id, :name, :airport_code, :description, :location, :lat, :long, :average_rating, :average_queue_time_rating, :average_cleanliness_rating, :average_wifi_rating, :average_staff_rating, :average_lounge_space_rating
end
