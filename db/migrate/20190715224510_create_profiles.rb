class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :first_name, null: false
      t.string :age, null: false
      t.string :zipcode, null: false
      t.string :gender, null: false
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
