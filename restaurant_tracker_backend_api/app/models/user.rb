class User < ApplicationRecord
	has_many :notes
	has_many :restaurants, through: :notes
end
