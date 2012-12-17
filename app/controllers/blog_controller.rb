
class BlogController < ApplicationController

	def index
		@albums = Album.all
    @current_album = Album.first  
	end
end
