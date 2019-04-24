class AirportSerializer < ActiveModel::Serializer
  attributes :id, :name, :airport_code, :description, :location
end
