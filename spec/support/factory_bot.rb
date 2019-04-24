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

end
