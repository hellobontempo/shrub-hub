class Collection < ApplicationRecord
    has_many :plant_collections, dependent: :destroy
    has_many :plants, through: :plant_collections
    validates :name, presence: true
    validates :user, presence: true
    validates_presence_of :plants
end
