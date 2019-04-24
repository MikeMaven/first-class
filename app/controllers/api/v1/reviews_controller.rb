class Api::V1::ReviewsController < ApiController
  def index
    airport = Airport.find(params[:airport_id])
    render json: { reviews: airport.reviews }
  end

end
