class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :neighborhood, :rating
end

