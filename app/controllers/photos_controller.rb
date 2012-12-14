class PhotosController < ApplicationController
  #before_filter :authenticate_user!
  def create
    @photo = Photo.new(params[:photo])
    @photo.save!
    redirect_to admin_index_path

  end

  

end