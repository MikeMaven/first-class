class Api::V1::VotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    vote = Vote.create(vote_params)
    render json: { vote: vote }
  end

  def update
  end

  def vote_params
    params.require(:vote).permit(:vote, :user_id, :review_id)
  end
end
