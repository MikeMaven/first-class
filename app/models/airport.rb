class Airport < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :airport_code, presence: true
  validates :lat, presence: true
  validates :long, presence: true

  has_many :reviews

  def average_rating
    total_score = 0
    if self.reviews.length >= 1
      self.reviews.each do |review|
        total_score += review.overall_rating
      end
      (total_score.to_f / self.reviews.length).round(1)
    else
      total_score
    end
  end

  def average_queue_time_rating
    total_score = 0
    if self.reviews.length >= 1
      self.reviews.each do |review|
        total_score += review.queue_time
      end
      (total_score.to_f / self.reviews.length).round(1)
    else
      total_score
    end
  end

  def average_cleanliness_rating
    total_score = 0
    if self.reviews.length >= 1
      self.reviews.each do |review|
        total_score += review.cleanliness
      end
      (total_score.to_f / self.reviews.length).round(1)
    else
      total_score
    end
  end

  def average_wifi_rating
    total_score = 0
    if self.reviews.length >= 1
      self.reviews.each do |review|
        total_score += review.wifi
      end
      (total_score.to_f / self.reviews.length).round(1)
    else
      total_score
    end
  end

  def average_staff_rating
    total_score = 0
    if self.reviews.length >= 1
      self.reviews.each do |review|
        total_score += review.staff
      end
      (total_score.to_f / self.reviews.length).round(1)
    else
      total_score
    end
  end

  def average_lounge_space_rating
    total_score = 0
    if self.reviews.length >= 1
      self.reviews.each do |review|
        total_score += review.lounge_space
      end
      (total_score.to_f / self.reviews.length).round(1)
    else
      total_score
    end
  end
end
