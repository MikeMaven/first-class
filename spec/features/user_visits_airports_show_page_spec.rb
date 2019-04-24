require 'rails_helper'

feature "user visits show path" do

  scenario 'sees specific airport show page' do
    FactoryBot.create(:airport)

    visit '/airports/1'
    expect(page).to have_current_path('/airports/1')
  end
end
