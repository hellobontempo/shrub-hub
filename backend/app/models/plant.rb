class Plant < ApplicationRecord
    has_many :plant_collections
    has_many :collections, through: :plant_collections
end
