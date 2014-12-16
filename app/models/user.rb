class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :property_listings, :foreign_key => :poster_id

  has_many :property_listings_users
  has_many :short_listed_properties, :through => :property_listings_users, :source => :property_listing
end
