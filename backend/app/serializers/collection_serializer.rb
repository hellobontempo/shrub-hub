class CollectionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :user
end
