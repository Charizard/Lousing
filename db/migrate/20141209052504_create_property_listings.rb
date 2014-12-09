class CreatePropertyListings < ActiveRecord::Migration
  def change
    create_table :property_listings do |t|
      t.integer :bhk
      t.string :address
      t.string :property_type
      t.integer :buildup_area
      t.integer :bathrooms
      t.string :furnish_type
      t.integer :rent
      t.integer :security_deposit
      t.belongs_to :poster, index: true

      t.timestamps
    end
  end
end
