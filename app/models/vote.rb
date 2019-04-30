class Vote < ApplicationRecord
  validates :vote, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: -1, less_than_or_equal_to: 1 }
  validates_uniqueness_of :user_id, :scope => :review_id

  belongs_to :user
  belongs_to :review
end
