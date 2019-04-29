class Review < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  validates :body, length: { minimum: 20 }

  validates :overall_rating, presence: true
  validates :overall_rating, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }
  validates :queue_time, presence: true
  validates :queue_time, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }
  validates :cleanliness, presence: true
  validates :cleanliness, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }
  validates :wifi, presence: true
  validates :wifi, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }
  validates :staff, presence: true
  validates :staff, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }
  validates :lounge_space, presence: true
  validates :lounge_space, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }

  validates :user, presence: true

  belongs_to :user
  belongs_to :airport

end
