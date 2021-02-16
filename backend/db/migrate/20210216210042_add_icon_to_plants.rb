class AddIconToPlants < ActiveRecord::Migration[6.1]
  def change
    add_column :plants, :icon, :string
  end
end
