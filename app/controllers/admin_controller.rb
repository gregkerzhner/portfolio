
class AdminController < ApplicationController
	before_filter :authenticate_user!

	def index
   
    @photo = Photo.new
	end

end
