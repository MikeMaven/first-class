require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe 'GET#index' do
    let!(:airport1) { FactoryBot.create(:airport) }
    let!(:review1) { FactoryBot.create(:review, airport: airport1) }
    let!(:review2) { FactoryBot.create(:review, airport: airport1) }
    it 'returns successful response with json-formatted data' do
      get :index, params: {:airport_id => airport1.id}

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq(2)
      expect(returned_json['reviews'][0]['id']).to eq(review1.id)
      expect(returned_json['reviews'][0]['title']).to eq(review1.title)
      expect(returned_json['reviews'][0]['body']).to eq(review1.body)
      expect(returned_json['reviews'][0]['overall_rating']).to eq(review1.overall_rating)
      expect(returned_json['reviews'][0]['queue_time']).to eq(review1.queue_time)
      expect(returned_json['reviews'][0]['cleanliness']).to eq(review1.cleanliness)
      expect(returned_json['reviews'][0]['wifi']).to eq(review1.wifi)
      expect(returned_json['reviews'][0]['staff']).to eq(review1.staff)
      expect(returned_json['reviews'][0]['lounge_space']).to eq(review1.lounge_space)
      expect(returned_json['reviews'][0]['airport_id']).to eq(review1.airport_id)

      expect(returned_json['reviews'][1]['id']).to eq(review2.id)
      expect(returned_json['reviews'][1]['title']).to eq(review2.title)
      expect(returned_json['reviews'][1]['body']).to eq(review2.body)
      expect(returned_json['reviews'][1]['overall_rating']).to eq(review2.overall_rating)
      expect(returned_json['reviews'][1]['queue_time']).to eq(review2.queue_time)
      expect(returned_json['reviews'][1]['cleanliness']).to eq(review2.cleanliness)
      expect(returned_json['reviews'][1]['wifi']).to eq(review2.wifi)
      expect(returned_json['reviews'][1]['staff']).to eq(review2.staff)
      expect(returned_json['reviews'][1]['lounge_space']).to eq(review2.lounge_space)
      expect(returned_json['reviews'][1]['airport_id']).to eq(review2.airport_id)
    end
  end

  describe 'POST#index' do
    let!(:new_user) { FactoryBot.create(:user) }
    let!(:new_airport) { FactoryBot.create(:airport) }
    let!(:new_review) { FactoryBot.create(:review, airport: new_airport) }

    before { allow(controller).to receive(:current_user) { new_user } }
    it 'adds a new review to the database' do
      expect { post :create, params: {:airport_id => new_airport.id, :review => {
        :title => new_review['title'],
        :body => new_review['body'],
        :overall_rating => new_review['overall_rating'],
        :queue_time => new_review['queue_time'],
        :cleanliness => new_review['cleanliness'],
        :wifi => new_review['wifi'],
        :staff => new_review['staff'],
        :lounge_space => new_review['lounge_space']
      }} }.to change { Review.count }.by 1
    end

    it 'returns the new review as json' do
      post :create, params: {
        :airport_id => new_airport.id,
        :review => {
          :title => new_review['title'],
          :body => new_review['body'],
          :overall_rating => new_review['overall_rating'],
          :queue_time => new_review['queue_time'],
          :cleanliness => new_review['cleanliness'],
          :wifi => new_review['wifi'],
          :staff => new_review['staff'],
          :lounge_space => new_review['lounge_space']
        }
      }

      response_json = JSON.parse(response.body)['review']
      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json'

      expect(response_json['title']).to eq new_review[:title]
      expect(response_json['body']).to eq new_review[:body]
      expect(response_json['overall_rating']).to eq new_review[:overall_rating]
      expect(response_json['queue_time']).to eq new_review[:queue_time]
      expect(response_json['cleanliness']).to eq new_review[:cleanliness]
      expect(response_json['wifi']).to eq new_review[:wifi]
      expect(response_json['staff']).to eq new_review[:staff]
      expect(response_json['lounge_space']).to eq new_review[:lounge_space]
    end
  end
end
