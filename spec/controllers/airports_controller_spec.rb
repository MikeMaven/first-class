require 'rails_helper'

RSpec.describe Api::V1::AirportsController, type: :controller do
  describe 'GET#index' do
    it 'returns successful response with json-formatted data' do
      airport1 = Airport.create(name: "Logan", location: "Boston", airport_code: "BOS")

      get :index

      expect(response.status).to eq(200)
      expect(response.content_type).to eq('application/json')
    end
  end

  describe 'POST#index' do
    let!(:new_airport) { { airport: {airport_code: "BOS", name: "Logan Int", location: "Boston, MA", description: "Cool"} }}

    it 'adds a new airport to the database' do
      expect { post :create, params: new_airport }.to change { Airport.count }.by 1

    end

    it 'returns the new airport as json' do
      post :create, params: new_airport

      response_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json'

      expect(response_json['name']).to eq new_airport[:name]
      expect(response_json['airport_code']).to eq new_airport[:airport_code]
      expect(response_json['location']).to eq new_airport[:location]
      expect(response_json['description']).to eq new_airport[:description]
    end
  end
end
