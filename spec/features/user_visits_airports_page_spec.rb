require 'rails_helper'

feature "user visits airports index page" do

  scenario 'sees navigates to correct path' do

    visit '/'
    click_link("Get Started")

    expect(page).to have_current_path("/airports")
  end
  
end
