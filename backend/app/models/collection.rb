class Collection < ApplicationRecord
    has_many :plant_collections, dependent: :destroy
    has_many :plants, through: :plant_collections

end
