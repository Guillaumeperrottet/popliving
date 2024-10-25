class BookingMailer < ApplicationMailer
  default from: ENV.fetch('EMAIL_FROM', 'no-reply@tonsite.com') # Utilise l'adresse par défaut si la variable n'est pas définie

  def new_booking(booking)
    @booking = booking
    mail(to: ENV.fetch('RESERVATION_EMAIL', 'info@campus-gerance.ch'), subject: 'PopLiving Riaz - Demande de Réservation')
  end
end
