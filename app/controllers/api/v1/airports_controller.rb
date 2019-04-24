class Api::V1::AirportsController < ApiController
  def index
    render json: Airport.all
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
end
