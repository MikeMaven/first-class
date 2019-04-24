require 'factory_bot'
require 'faker'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :airport do
    name { Faker::Company.name }
    location { Faker::Address.city }
    airport_code { Faker::String.random(3) }
    description { Faker::Quote.famous_last_words }
  end

  factory :review do
    title { Faker::Marketing.buzzwords }
    body { (0...50).map { ('a'..'z').to_a[rand(26)] }.join }
    overall_rating { Faker::Number.within(1..5) }
    queue_time { Faker::Number.within(1..5) }
    cleanliness { Faker::Number.within(1..5) }
    wifi { Faker::Number.within(1..5) }
    staff { Faker::Number.within(1..5) }
    lounge_space { Faker::Number.within(1..5) }
    airport { FactoryBot.create(:airport) }
  end

end
