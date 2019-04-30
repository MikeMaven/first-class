require 'rails_helper'

feature "user visits edit page for review" do
  scenario 'sees edit page for review they own' do
    user = FactoryBot.create(:user)
    airport = FactoryBot.create(:airport)
    review = FactoryBot.create(:review, airport: airport, user: user)

    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    visit "/reviews/#{review.id}/edit"

    expect(page).to have_content("Edit Review")
    expect(page).to have_content("Title:")
    expect(page).to have_content("Body:")
    expect(page).to have_content("Overall Rating:")
    expect(page).to have_content("Queue Time Rating:")
    expect(page).to have_content("Cleanliness Rating:")
    expect(page).to have_content("Wifi Rating:")
    expect(page).to have_content("Staff Rating:")
    expect(page).to have_content("Lounge Space Rating:")

    expect(page.find_field("review_title").value).to eq(review.title)
    expect(page.find_field("review_body").value).to eq(review.body)
    expect(page.find_field("review_overall_rating").value).to eq(review.overall_rating.to_s)
    expect(page.find_field("review_queue_time").value).to eq(review.queue_time.to_s)
    expect(page.find_field("review_cleanliness").value).to eq(review.cleanliness.to_s)
    expect(page.find_field("review_wifi").value).to eq(review.wifi.to_s)
    expect(page.find_field("review_staff").value).to eq(review.staff.to_s)
    expect(page.find_field("review_lounge_space").value).to eq(review.lounge_space.to_s)
  end

  scenario 'user submits form successfully' do
    user = FactoryBot.create(:user)
    airport = FactoryBot.create(:airport)
    review = FactoryBot.create(:review, airport: airport, user: user)

    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    visit "/reviews/#{review.id}/edit"

    fill_in "Body:", with: "Enough chars because we have at least 20"
    click_button 'Edit Review'

    expect(page).to have_current_path("/airports/#{airport.id}")
  end

  scenario 'user submits for unsuccessfully' do
    user = FactoryBot.create(:user)
    airport = FactoryBot.create(:airport)
    review = FactoryBot.create(:review, airport: airport, user: user)

    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    visit "/reviews/#{review.id}/edit"

    fill_in "Body:", with: "Not enough chars"
    click_button 'Edit Review'

    expect(page).to have_current_path("/reviews/#{review.id}")
  end

  scenario 'user deletes review successfully' do
    user = FactoryBot.create(:user)
    airport = FactoryBot.create(:airport)
    review = FactoryBot.create(:review, airport: airport, user: user)

    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    visit "/reviews/#{review.id}/edit"

    click_link 'Delete Review'

    expect(page).to have_current_path("/airports/#{airport.id}")
  end

end
