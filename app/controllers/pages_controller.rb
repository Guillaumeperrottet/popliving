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
end
