class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
    	t.string :title
    	t.string :body
    	t.integer :user_id
    	t.integer :restaurant_id
      t.timestamps
    end
  end
end
