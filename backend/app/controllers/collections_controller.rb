class CollectionsController < ApplicationController
  before_action :set_collection, only: [:show, :update, :destroy]

  # GET /collections
  def index
    collections = Collection.all
    render json: collections.to_json(include: [:plants])
  end

  # GET /collections/1
  def show
    render json: @collection.to_json(include: [:plants])
  end

  # POST /collections
  def create
    @collection = Collection.new(collection_params)
    if @collection.save
      render json: @collection.to_json(include: [:plants])#status: :created, location: @collection
      # render json: { id: @collection.id, name: @collection.name, user: @collection.user, plant_ids: @collection.plant_ids }.to_json 
    else
      render json: @collection.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /collections/1
  def update
    if @collection.update(collection_params)
      render json: @collection
    else
      render json: @collection.errors, status: :unprocessable_entity
    end
  end

  # DELETE /collections/1
  def destroy
    @collection.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_collection
      @collection = Collection.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def collection_params
      params.require(:collection).permit(:name, :user, plant_ids:[])
    end
end
