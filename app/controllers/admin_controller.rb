
class AdminController < ApplicationController
	before_filter :authenticate_user!

	def index
    @album = Album.new
    @photo = Photo.new
	end

end
