class Api::V1::AirportsController < ApiController
  def index
    if current_user
      render json: { airports: serialized_airports, current_user: current_user }
    else
      render json: { airports: serialized_airports, current_user: { role: "guest"} }
    end
  end

  def show
    render json: Airport.find(params[:id])
  end

  def create
    airport = Airport.new(airport_params)

    if airport.save
      render json: { airport: airport }
    else
      render json: { airport: airport }
    end
  end

  def airport_params
    params.require(:airport).permit(:airport_code, :name, :location, :description)
  end

  def serialized_airports
    ActiveModel::Serializer::ArraySerializer.new(Airport.all, each_serializer: AirportSerializer)
  end
end
