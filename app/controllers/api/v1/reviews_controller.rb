class Api::V1::ReviewsController < ApiController
  def index
    if params[:airport_id]
      airport = Airport.find(params[:airport_id])
      if current_user
        render json: { reviews: airport.reviews, current_user: current_user }
      else
        render json: { reviews: airport.reviews, current_user: { role: "guest" } }
      end
    else
      user = User.find(params[:user_id])
      if current_user
        render json: { reviews: user.reviews, current_user: current_user }
      else
        render json: { reviews: user.reviews, current_user: { role: "guest" } }
      end
    end
  end

  def create
    airport = Airport.find(params[:airport_id])
    review = Review.new(review_params)
    review.airport = airport
    review.user = current_user
    review.save
    render json: { review: review }
  end

  def review_params
    params.require(:review).permit(:title, :body, :overall_rating, :queue_time, :cleanliness, :wifi, :staff, :lounge_space)
  end

  def serialized_reviews
    airport = Airport.find(params[:airport_id])
    ActiveModel::Serializer::ArraySerializer.new(airport.reviews, each_serializer: ReviewSerializer)
  end
end
