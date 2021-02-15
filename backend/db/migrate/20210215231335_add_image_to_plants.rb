class AddImageToPlants < ActiveRecord::Migration[6.1]
  def change
    add_column :plants, :img_src, :string
  end
end
