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
end
