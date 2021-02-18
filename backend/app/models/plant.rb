class Plant < ApplicationRecord
    has_many :plant_collections, dependent: :destroy
    has_many :collections, through: :plant_collections
end
