class Vote < ApplicationRecord
  validates :vote, presence: true
  validates :index_votes_on_user_id_and_review_id, uniqueness: true

  belongs_to :user
  belongs_to :review
end
