class Plant < ApplicationRecord
    has_many :plant_collections, dependent: :destroy
    has_many :collections, through: :plant_collections
    validates :sci_name, presence: true, uniqueness: true
    validates :common_name, presence: true
    validates :care, presence: true
    validates :img_src, presence: true
end
