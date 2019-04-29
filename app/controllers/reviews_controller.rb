class ReviewsController < ApplicationController
  before_action :authorize_user

  def edit
    @review = Review.find(params[:id])
  end
  def update
  end

  def authorize_user
    if !user_signed_in? || Review.find(params[:id]).user != current_user
      raise ActionController::RoutingError.new("Not authorized to view this page. :[")
    end
  end
end
