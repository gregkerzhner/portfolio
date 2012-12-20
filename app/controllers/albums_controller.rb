class AlbumsController < ApplicationController

  def index
    @photos = Album.where(title: params[:title]).first.photos

    render json: @photos
  end

  def create
    @album = Album.create(params[:album])
  redirect_to admin_index_path
  end
end
