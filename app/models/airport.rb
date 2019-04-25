class Airport < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :airport_code, presence: true

  has_many :reviews
end
