Rails.application.routes.draw do
  root to: "pages#home"
  get "about", to: "pages#about"
  get "contact", to: "pages#contact"
  get "how-it-works", to: "pages#how_it_works"

  # Route pour afficher le formulaire de réservation (pages#booking)
  get "booking", to: "bookings#new", as: "new_booking"

  # Routes pour la création des réservations (formulaire)
  resources :bookings, only: [:create]
end
