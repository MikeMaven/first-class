class ReviewsController < ApplicationController
  before_action :authorize_user

  def edit
    @review = Review.find(params[:id])
  end
  def update
    @review = Review.find(params[:id])
    @review.update(review_params)

    if @review.valid?
      redirect_to @review.airport
    else
      flash[:errors] = @review.errors.full_messages.join(", ")
      render :edit
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @airport = @review.airport
    @review.destroy
    redirect_to @airport
  end

  def review_params
    params.require(:review).permit(:title, :body, :overall_rating, :queue_time, :cleanliness, :wifi, :staff, :lounge_space)
  end

  def authorize_user
    if (!user_signed_in? || Review.find(params[:id]).user != current_user) && current_user.role != "admin"
      raise ActionController::RoutingError.new("Not authorized to view this page. :[")
    end
  end

end
