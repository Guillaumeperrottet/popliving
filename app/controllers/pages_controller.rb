class PagesController < ApplicationController
  def home
  end

  def contact
  end

  def about
  end

  def how_it_works
  end

  def booking
    @booking = Booking.new
  end

  def concept
    @concept_images = {
      "flexible" => "https://res.cloudinary.com/dafkgjhwt/image/upload/v1736427139/undraw_design-inspiration_2mrc_wonfe8.png",
      "cohabitation" => "https://res.cloudinary.com/dafkgjhwt/image/upload/v1736353057/undraw_coffee-with-friends_ocg2_tsjrip.png",
      "services" => "https://res.cloudinary.com/dafkgjhwt/image/upload/v1736353169/undraw_signal-searching_yod3_htyxq5.png",
      "common_areas" => "https://res.cloudinary.com/dafkgjhwt/image/upload/v1736352603/undraw_open-source_g069_ylgw6a.png",
      "peaceful" => "https://res.cloudinary.com/dafkgjhwt/image/upload/v1736352383/undraw_tree-swing_5010_n75kwe.png"
    }
  end

end
