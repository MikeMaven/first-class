require 'rails_helper'

feature "user visits show path" do

  scenario 'sees specific airport show page' do
    Airport.create(name: 'Logan', airport_code: 'BOS', location: 'Boston', description: 'Amazing Airport')

    visit '/airports/1'
    expect(page).to have_current_path('/airports/1')
  end
end
