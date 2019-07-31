class CreateStats < ActiveRecord::Migration[5.2]
  def change
    create_table :stats do |t|
      t.string :recent_runs
      t.string :ytd_runs
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
