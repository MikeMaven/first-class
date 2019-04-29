require 'rails_helper'

RSpec.describe Vote, type: :model do
  it { should have_valid(:vote).when(-1, 0, 1) }
  it { should_not have_valid(:vote).when(nil, "", -2, 2, 0.5) }
  it "should create a new vote when the user and review ids are unique in the table" do
    user = FactoryBot.create(:user)
    user_2 = FactoryBot.create(:user)
    review = FactoryBot.create(:review)
    review_2 = FactoryBot.create(:review)
    vote = Vote.create(vote: 1, user: user, review: review)
    vote_2 = Vote.create(vote: 1, user: user_2, review: review)
    vote_3 = Vote.create(vote: 1, user: user, review: review_2)

    expect(vote.valid?).to eq(true)
    expect(vote_2.valid?).to eq(true)
    expect(vote_3.valid?).to eq(true)
  end
  describe "#vote" do
    it "should not create a new vote when the user id and review id are the same" do
      user = FactoryBot.create(:user)
      review = FactoryBot.create(:review)
      review_2 = FactoryBot.create(:review)
      vote = Vote.create(vote: 1, user: user, review: review)
      vote_2 = Vote.new(vote: 1, user: user, review: review)
      vote_3 = Vote.create(vote: 1, user: user, review: review_2)

      expect(vote.valid?).to eq(true)
      expect(vote_2.valid?).to eq(false)
      expect(vote_3.valid?).to eq(true)
    end
  end
end
