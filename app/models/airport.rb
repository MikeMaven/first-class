class Airport < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :airport_code, presence: true

  has_many :reviews

  def average_rating
    total_score = 0
    if self.reviews.length >= 1
      self.reviews.each do |review|
        total_score += review.overall_rating
      end
      (total_score / self.reviews.length).to_i
    else
      total_score
    end
  end
end
