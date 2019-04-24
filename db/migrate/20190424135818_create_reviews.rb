class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false

      t.integer :overall_rating, null: false
      t.integer :queue_time, null: false
      t.integer :cleanliness, null: false
      t.integer :wifi, null: false
      t.integer :staff, null: false
      t.integer :lounge_space, null: false

      t.belongs_to :airport, null: false

      t.timestamps null: false
    end
  end
end
