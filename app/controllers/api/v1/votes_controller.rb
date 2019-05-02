class Api::V1::VotesController < ApiController
  def index
    review = Review.find(params[:review_id])
    user_vote = Vote.where(user: current_user, review: review)[0]
    if user_vote
      render json: { user_vote: user_vote }
    else
      render json: { user_vote: {vote: 0} }
    end
  end

  def create
    if Vote.where(user: current_user, review: Review.find(params[:vote][:review_id]))[0]
      review = Review.find(params[:vote][:review_id])
      user_vote = Vote.where(user: current_user, review: review)[0]
      vote = user_vote.update(vote_params)
      render json: { vote: vote, score: review.score, current_user_vote: user_vote.vote }
    else
      review = Review.find(params[:vote][:review_id])
      vote = Vote.create(vote_params)
      user_vote = Vote.where(user: current_user, review: review)[0]
      render json: { vote: vote, score: review.score, current_user_vote: user_vote.vote }
    end
  end

  def vote_params
    params.require(:vote).permit(:vote, :user_id, :review_id)
  end
end
