class BookingMailer < ApplicationMailer
  default from: 'no-reply@tonsite.com'

  def new_booking(booking)
    @booking = booking
    mail(to: 'info@campus-gerance.ch', subject: 'PopLiving Riaz - Demande de Réservation')
  end
end
