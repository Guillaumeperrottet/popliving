class BookingMailer < ApplicationMailer
  def new_booking(booking)
    @booking = booking
    mail(
      to: ENV.fetch('RESERVATION_EMAIL', 'info@campus-gerance.ch'),
      from: ENV.fetch('EMAIL_FROM', 'info@campus-gerance.ch'),
      subject: 'PopLiving Riaz - Demande de Réservation'
    )
  end
end
