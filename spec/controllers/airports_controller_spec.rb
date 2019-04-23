require 'rails_helper'

RSpec.describe Api::V1::AirportsController, type: :controller do
  describe 'GET#index' do
    it 'returns successful response with json-formatted data' do
      airport1 = Airport.create(name: "Logan", location: "Boston", airport_code: "BOS")

      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(response.content_type).to eq('application/json')
      expect(returned_json.length).to eq(1)
      expect(returned_json['airports'][0]['id']).to eq(airport1.id)
      expect(returned_json['airports'][0]['name']).to eq(airport1.name)
      expect(returned_json['airports'][0]['location']).to eq(airport1.location)
      expect(returned_json['airports'][0]['airport_code']).to eq(airport1.airport_code)
    end
  end

  describe 'GET#show' do
    it 'returns successful response with json-formatted data for a specific airport' do
      airport1 = Airport.create(name: "Logan", location: "Boston", airport_code: "BOS")
      airport2 = Airport.create(name: "JFK International", location: "New York", airport_code: "JFK", description: 'Great Airport', )

      get :show, params: {id: airport2.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(response.content_type).to eq('application/json')
      expect(returned_json.length).to eq(1)
      expect(returned_json['airport']['id']).to eq(airport2.id)
      expect(returned_json['airport']['name']).to eq(airport2.name)
      expect(returned_json['airport']['location']).to eq(airport2.location)
      expect(returned_json['airport']['airport_code']).to eq(airport2.airport_code)
      expect(returned_json['airport']['description']).to eq(airport2.description)

      expect(returned_json['airport']['name']).not_to eq(airport1.name)



    end
  end

end
