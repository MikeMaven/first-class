require 'rails_helper'

feature "user visits root path" do

  scenario 'sees landing page' do

    visit '/'

    expect(page).to have_content('firstClass')
    expect(page).to have_content('Airport reviews for the frequent flyer.')
  end

  scenario 'clicks the member login button and is taken to log in page' do

    visit '/'
    click_link "Member Login"
    expect(page).to have_content "Log in to begin your firstClass journey!"
    expect(page).to have_content "Email"
    expect(page).to have_content "Password"
  end

end