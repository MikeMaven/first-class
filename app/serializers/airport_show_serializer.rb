class AirportShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :airport_code, :description, :location, :current_user

  def current_user
    if scope
      scope
    else
      {role: "guest"}
    end
  end
end
