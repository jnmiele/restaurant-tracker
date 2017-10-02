class User < ApplicationRecord
	has_secure_password
	has_many :spots
	has_many :restaurants, through: :spots
end
