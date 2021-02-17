class PlantCollectionsController < ApplicationController
  before_action :set_plant_collection, only: [:show, :update, :destroy]

  # GET /plant_collections
  def index
    @plant_collections = PlantCollection.all

    render json: @plant_collections
  end

  # GET /plant_collections/1
  def show
    render json: @plant_collection
  end

  # POST /plant_collections
  def create
    @plant_collection = PlantCollection.new(plant_collection_params)

    if @plant_collection.save
      render json: @plant_collection, status: :created, location: @plant_collection
    else
      render json: @plant_collection.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /plant_collections/1
  def update
    if @plant_collection.update(plant_collection_params)
      render json: @plant_collection
    else
      render json: @plant_collection.errors, status: :unprocessable_entity
    end
  end

  # DELETE /plant_collections/1
  def destroy
    @plant_collection.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plant_collection
      @plant_collection = PlantCollection.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def plant_collection_params
      params.require(:plant_collection).permit(:collection_id, :plant_id)
    end
end
