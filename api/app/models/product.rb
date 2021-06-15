class Product < ApplicationRecord
    has_many :product_property
    
    def self.search(search)
        if search
          self.where(name: search)
        else
          @products = Product.all
        end
      end
end
