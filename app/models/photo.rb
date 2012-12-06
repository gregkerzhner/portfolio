class Photo < ActiveRecord::Base
   mount_uploader :photo, PhotoUploader
   attr_accessible :title, :caption

end
