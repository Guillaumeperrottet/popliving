class Booking < ApplicationRecord
  validates :room_type, :check_in, :duration, :first_name, :last_name, :email, :phone, :address, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: "n'est pas valide" }
  validates :phone, format: { with: /\A[0-9\-\+]{9,15}\z/, message: "doit être un numéro de téléphone valide" }
end
