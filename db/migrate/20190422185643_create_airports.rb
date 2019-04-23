class CreateAirports < ActiveRecord::Migration[5.2]
  def change
    create_table :airports do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :airport_code, null: false
      t.string :description

      t.timestamps null: false
    end
  end
end
