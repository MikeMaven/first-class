require "rails_helper"

feature "profile photo" do
  scenario "user uploads a profile photo" do
    visit root_path
    click_link "Sign Up"

    fill_in "Email", with: "josh@gmail.com"
    fill_in "Password", with: "myPassword"
    fill_in "Password confirmation", with: "myPassword"
    attach_file :user_profile_photo, "#{Rails.root}/spec/support/images/photo.jpg"
    click_button "Sign up"

    expect(page).to have_content("Welcome! You have signed up successfully")

    user = User.find_by(email: "josh@gmail.com")
    visit "/users/#{user.id}"

    expect(page).to have_css("img[src*='photo.jpg']")
    expect(page).to have_content("josh's Profile")
  end
end
