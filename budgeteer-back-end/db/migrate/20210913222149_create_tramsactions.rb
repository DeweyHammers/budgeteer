class CreateTramsactions < ActiveRecord::Migration[6.1]
  def change
    create_table :tramsactions do |t|
      t.string :name
      t.float :outflow
      t.float :inflow
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
