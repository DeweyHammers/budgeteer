class CreateManifests < ActiveRecord::Migration[6.1]
  def change
    create_table :manifests do |t|
      t.references :transaction, null: false, foreign_key: true
      t.references :budget, null: false, foreign_key: true

      t.timestamps
    end
  end
end
