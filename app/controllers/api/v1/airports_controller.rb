class Api::V1::AirportsController < ApiController
  def index
    render json: { airports: Airport.all }
  end
end
