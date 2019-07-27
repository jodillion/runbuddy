# frozen_string_literal: true

class DeviseCreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :access_token, null: false
      t.string :provider, null: false
      t.integer :uid, null: false
      t.string :firstname
      t.string :lastname
      t.string :profile
      t.string :city
      t.string :state
      t.string :profile
      t.string :profile_medium
      t.string :sex

      t.timestamps null: false
    end
  end
end
