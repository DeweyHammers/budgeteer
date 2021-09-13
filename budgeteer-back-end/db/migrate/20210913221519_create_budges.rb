class CreateBudges < ActiveRecord::Migration[6.1]
  def change
    create_table :budgets do |t|
      t.string :name
      t.string :category
      t.float :cost_per_month
      t.float :assign_money
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
