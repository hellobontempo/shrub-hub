class CreatePlantCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :plant_collections do |t|
      t.references :collection, null: false, foreign_key: true
      t.references :plant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
