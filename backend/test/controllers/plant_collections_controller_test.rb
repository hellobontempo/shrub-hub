require "test_helper"

class PlantCollectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @plant_collection = plant_collections(:one)
  end

  test "should get index" do
    get plant_collections_url, as: :json
    assert_response :success
  end

  test "should create plant_collection" do
    assert_difference('PlantCollection.count') do
      post plant_collections_url, params: { plant_collection: { collection_id: @plant_collection.collection_id, plant_id: @plant_collection.plant_id } }, as: :json
    end

    assert_response 201
  end

  test "should show plant_collection" do
    get plant_collection_url(@plant_collection), as: :json
    assert_response :success
  end

  test "should update plant_collection" do
    patch plant_collection_url(@plant_collection), params: { plant_collection: { collection_id: @plant_collection.collection_id, plant_id: @plant_collection.plant_id } }, as: :json
    assert_response 200
  end

  test "should destroy plant_collection" do
    assert_difference('PlantCollection.count', -1) do
      delete plant_collection_url(@plant_collection), as: :json
    end

    assert_response 204
  end
end
