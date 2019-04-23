require 'rails_helper'

RSpec.describe Airport, type: :model do
  it { should have_valid(:name).when("Logan") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:location).when("Boston") }
  it { should_not have_valid(:location).when(nil, "") }

  it { should have_valid(:airport_code).when("BOS") }
  it { should_not have_valid(:airport_code).when(nil, "") }

  it { should have_valid(:description).when("This is an airport!") }
  it { should have_valid(:description).when(nil, "") }
end
