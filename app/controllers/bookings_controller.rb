class BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      # Envoie un email avec les détails de la réservation
      puts "Booking successfully saved: #{@booking.inspect}"  # Message de confirmation

      BookingMailer.new_booking(@booking).deliver_now
      redirect_to new_booking_path, notice: "Votre demande a bien été envoyée."
    else
      puts "Booking failed to save: #{@booking.errors.full_messages}"  # Affiche les erreurs de validation

      flash.now[:alert] = "La réservation n'a pas pu être enregistrée. Veuillez corriger les erreurs ci-dessous."
      render "pages/booking", status: :unprocessable_entity
    end
  end

  def new
    @booking = Booking.new
    render "pages/booking" # Rend la vue pages/booking.html.erb
  end

  private

  def booking_params
    params.require(:booking).permit(:room_type, :check_in, :duration, :message, :first_name, :last_name, :email, :phone, :address)
  end
end
