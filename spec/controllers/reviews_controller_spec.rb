require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe 'GET#index' do
    it 'returns successful response with json-formatted data' do
      airport1 = FactoryBot.create(:airport)
      review1 = FactoryBot.create(:review, airport: airport1)
      review2 = FactoryBot.create(:review, airport: airport1)

      get :index, params: {:airport_id => airport1.id}

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq(1)
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
end
