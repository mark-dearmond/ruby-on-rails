class ProductProperty < ApplicationRecord
  belongs_to :product
  belongs_to :property

  def self.search(search)
    if search
      self.where(product_id: search)
    else
      @product_properties = ProductProperty.all
    end
  end
end
