class Api::V1::AirportsController < ApiController
  def show
    render json: { airports: Airport.all }
  end
end
