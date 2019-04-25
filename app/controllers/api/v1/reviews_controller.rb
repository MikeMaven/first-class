class Api::V1::ReviewsController < ApiController
  def index
    airport = Airport.find(params[:airport_id])
    render json: { reviews: airport.reviews }
  end

  def create
    airport = Airport.find(params[:airport_id])
    review = Review.new(review_params)
    review.airport = airport
    review.save

    render json: { review: review }
  end

  def review_params
    params.require(:review).permit(:title, :body, :overall_rating, :queue_time, :cleanliness, :wifi, :staff, :lounge_space)
  end
end
