require "test_helper"

class ProductPropertiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product_property = product_properties(:one)
  end

  test "should get index" do
    get product_properties_url, as: :json
    assert_response :success
  end

  test "should create product_property" do
    assert_difference('ProductProperty.count') do
      post product_properties_url, params: { product_property: { product_id: @product_property.product_id, property_id: @product_property.property_id, value: @product_property.value } }, as: :json
    end

    assert_response 201
  end

  test "should show product_property" do
    get product_property_url(@product_property), as: :json
    assert_response :success
  end

  test "should update product_property" do
    patch product_property_url(@product_property), params: { product_property: { product_id: @product_property.product_id, property_id: @product_property.property_id, value: @product_property.value } }, as: :json
    assert_response 200
  end

  test "should destroy product_property" do
    assert_difference('ProductProperty.count', -1) do
      delete product_property_url(@product_property), as: :json
    end

    assert_response 204
  end
end
