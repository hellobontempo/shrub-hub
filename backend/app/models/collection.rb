class Collection < ApplicationRecord
    has_many :plant_collections
    has_many :plants, through: :plant_collections
end
