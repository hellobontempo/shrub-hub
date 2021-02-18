class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :sci_name, :care, :common_name, :img_src
end

