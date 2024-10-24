Rails.application.routes.draw do
  root to: "pages#home"
  get "about", to: "pages#about"
  get "contact", to: "pages#contact"
  get "how-it-works", to: "pages#how_it_works"
  get "booking", to: "pages#booking"
end
