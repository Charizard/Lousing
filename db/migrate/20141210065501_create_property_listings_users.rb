class CreatePropertyListingsUsers < ActiveRecord::Migration
  def change
    create_table :property_listings_users do |t|
      t.belongs_to :property_listing, index: true
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
