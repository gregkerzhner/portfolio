class Album < ActiveRecord::Base
	has_many :photos
  # attr_accessible :title, :body
end
