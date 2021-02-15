class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :sci_name
      t.text :care
      t.string :common_name

      t.timestamps
    end
  end
end
