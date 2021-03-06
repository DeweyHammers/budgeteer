class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.string :name
      t.string :account
      t.float :outflow
      t.float :inflow
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
