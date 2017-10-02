class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
    	t.string :name
    	t.string :address
    	t.string :rating
    	t.string :price
    	t.string :image_url
      t.timestamps
    end
  end
end
