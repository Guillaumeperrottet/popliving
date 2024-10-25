class BookingMailer < ApplicationMailer
  default from: 'no-reply@tonsite.com'

  def new_booking(booking)
    @booking = booking
    mail(to: 'info@campus-gerance.ch', subject: 'Nouvelle demande de réservation')
  end
end
