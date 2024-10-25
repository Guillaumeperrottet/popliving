class ApplicationController < ActionController::Base
  # before_action :show_maintenance

  private

  def show_maintenance
    # Vérifie si l'environnement est en production pour éviter la redirection en développement
    if Rails.env.production?
      render file: "#{Rails.root}/public/maintenance.html", layout: false
    end
  end
end
