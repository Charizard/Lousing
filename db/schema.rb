# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141211122142) do

  create_table "property_listings", force: true do |t|
    t.integer  "bhk"
    t.string   "address"
    t.string   "property_type"
    t.integer  "buildup_area"
    t.integer  "bathrooms"
    t.string   "furnish_type"
    t.integer  "rent"
    t.integer  "security_deposit"
    t.integer  "poster_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_url"
  end

  add_index "property_listings", ["poster_id"], name: "index_property_listings_on_poster_id", using: :btree

  create_table "property_listings_users", force: true do |t|
    t.integer  "property_listing_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "property_listings_users", ["property_listing_id"], name: "index_property_listings_users_on_property_listing_id", using: :btree
  add_index "property_listings_users", ["user_id"], name: "index_property_listings_users_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
    t.boolean  "is_landlord"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
