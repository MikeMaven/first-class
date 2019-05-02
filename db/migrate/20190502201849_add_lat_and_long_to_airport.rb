class AddLatAndLongToAirport < ActiveRecord::Migration[5.2]
  def change
    add_column :airports, :lat, :decimal, {null: false}
    add_column :airports, :long, :decimal, {null: false}
  end
end
