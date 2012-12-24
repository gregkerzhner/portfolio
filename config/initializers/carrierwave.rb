CarrierWave.configure do |config|

  config.storage = :fog
  config.fog_directory = 'tarareynvaan'
  
  config.fog_credentials = {
    :provider => 'AWS',
    :aws_access_key_id => 'AKIAJ4VVQVRVEJURYHYA',
    :aws_secret_access_key => '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',
    :region => 'us-east-1'
  }
end
