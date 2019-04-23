class Api::V1::AirportsController < ApiController
  def index
    render json: { airports: Airport.all }
  end

  def show
    render json: {airport: Airport.find(params[:id])}
  end
end
