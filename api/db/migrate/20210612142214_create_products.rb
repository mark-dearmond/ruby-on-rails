class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :upc
      t.datetime :available_on

      t.timestamps
    end
  end
end
