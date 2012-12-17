class AlbumsController < ApplicationController

  def index
    @photos = Album.where(title: params[:title]).first.photos
    
    render json: @photos
  end
end
