class BookingMailer < ApplicationMailer
  def new_booking(booking)
    @booking = booking
    mail(
      to: ENV.fetch('RESERVATION_EMAIL', 'info@campus-gerance.ch'),
      from: ENV.fetch('EMAIL_FROM', 'info@campus-gerance.ch'),
      subject: 'PopLiving Riaz - Demande de Réservation'
    )
  end

  def confirmation_email(booking)
    @booking = booking

    # Définir la langue en fonction de celle de l'utilisateur
    I18n.with_locale(@booking.locale || I18n.default_locale) do
      mail(to: @booking.email, subject: I18n.t('reservation.confirmation_subject'))
    end
  end
end
