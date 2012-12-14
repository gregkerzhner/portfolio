class Photo < ActiveRecord::Base
   mount_uploader :photo, PhotoUploader
   attr_accessible :title, :caption, :album, :photo, :album_id
   belongs_to :album
end
