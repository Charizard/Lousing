class AddImageUrlToPropertyListing < ActiveRecord::Migration
  def change
    add_column :property_listings, :image_url, :string
  end
end
