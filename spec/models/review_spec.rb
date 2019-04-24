require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should have_valid(:title).when("I love this airport!") }
  it { should_not have_valid(:title).when(nil, "") }

  it { should have_valid(:body).when("This is a more detailed description about the airport and my experiences with it. Neat!") }
  it { should_not have_valid(:body).when(nil, "", "Need 20 chars, bro") }

  it { should have_valid(:overall_rating).when(3) }
  it { should_not have_valid(:overall_rating).when(nil, "", 0, -5, 6, 4.5) }

  it { should have_valid(:queue_time).when(3) }
  it { should_not have_valid(:queue_time).when(nil, "", 0, -5, 6, 4.5) }

  it { should have_valid(:cleanliness).when(3) }
  it { should_not have_valid(:cleanliness).when(nil, "", 0, -5, 6, 4.5) }

  it { should have_valid(:wifi).when(3) }
  it { should_not have_valid(:wifi).when(nil, "", 0, -5, 6, 4.5) }

  it { should have_valid(:staff).when(3) }
  it { should_not have_valid(:staff).when(nil, "", 0, -5, 6, 4.5) }

  it { should have_valid(:lounge_space).when(3) }
  it { should_not have_valid(:lounge_space).when(nil, "", 0, -5, 6, 4.5) }

end
