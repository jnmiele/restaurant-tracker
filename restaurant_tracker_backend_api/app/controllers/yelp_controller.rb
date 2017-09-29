class YelpController < ApplicationController

    def fetch
    rest_name = params[:name]
    response = RestClient::Request.execute(
      method: :get,
      url: "https://api.yelp.com/v3/businesses/search?term=#{rest_name}&location=new+york",
      headers: {Authorization: "Bearer 9Q9iUZDHk6p6zC_D2YztRQCpLo3C79bufZ51DF9tiwdweSjjdmXchWAhAgRIPi5WVTK2z4u5kZsNwJxve05noCZ31yg4RKCCAhR153Or1cNpHN_4XjgPpK_YTvO3WXYx"}
    )
    results = JSON.parse(response)
    render json: results
  end

end