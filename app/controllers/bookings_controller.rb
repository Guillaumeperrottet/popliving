class BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      # Envoie un email avec les détails de la réservation
      puts "Booking successfully saved: #{@booking.inspect}"  # Message de confirmation

      # Envoie l'email de confirmation
      BookingMailer.confirmation_email(@booking).deliver_now

      BookingMailer.new_booking(@booking).deliver_now
      redirect_to new_booking_path, notice: I18n.t('reservation.success')
    else
      puts "Booking failed to save: #{@booking.errors.full_messages}"  # Affiche les erreurs de validation

      flash.now[:alert] = I18n.t('reservation.failure')
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
