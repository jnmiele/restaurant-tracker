class Restaurant < ApplicationRecord
	has_many :spots
	has_many :users, through: :spots
end
