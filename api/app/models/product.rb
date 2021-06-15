class Product < ApplicationRecord
    has_many :product_property

    validates :name, uniqueness: { scope: :name, message: "That product already exists" }
    validates :upc, uniqueness: { scope: :upc, message: "That UPC already exists" }
    
    def self.search(search)
        if search
          self.where(name: search)
        else
          @products = Product.all
        end
      end
end
