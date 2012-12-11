
class BlogController < ApplicationController

	def index
		@albums = Album.all
	end
end
