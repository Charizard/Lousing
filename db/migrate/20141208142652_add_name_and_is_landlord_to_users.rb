class AddNameAndIsLandlordToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :is_landlord, :boolean
  end
end
