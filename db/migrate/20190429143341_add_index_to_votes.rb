class AddIndexToVotes < ActiveRecord::Migration[5.2]
  def change
    add_index :votes, [:user_id, :review_id], unique: true
  end
end
