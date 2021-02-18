class PlantCollectionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :plant, :collection
  belongs_to :plant
  belongs_to :collection
end
