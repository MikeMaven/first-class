class ReviewsController < ApplicationController
  def edit
    @review = Review.find(params[:id])
  end
  def update
  end
end
