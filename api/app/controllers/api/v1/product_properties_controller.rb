class Api::V1::ProductPropertiesController < ApplicationController
  before_action :set_product_property, only: [:show, :update, :destroy]

  # GET /product_properties
  def index
    @product_properties = ProductProperty.search(params[:search])

    render json: @product_properties, include: [:property]
  end

  # GET /product_properties/1
  def show
    render json: @product_property
  end

  # POST /product_properties
  def create
    @product_property = ProductProperty.new(product_property_params)

    if @product_property.save
      render json: @product_property, status: :created, api_v1_product_property_url: @product_property
    else
      render json: @product_property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /product_properties/1
  def update
    if @product_property.update(product_property_params)
      render json: @product_property
    else
      render json: @product_property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /product_properties/1
  def destroy
    @product_property.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product_property
      @product_property = ProductProperty.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_property_params
      params.require(:product_property).permit(:value, :product_id, :property_id, :search)
    end
end
