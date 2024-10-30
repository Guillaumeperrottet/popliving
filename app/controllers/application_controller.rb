class ApplicationController < ActionController::Base
  before_action :set_locale
  # before_action :show_maintenance

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  # Assure-toi que la langue est conservée dans les liens
  def default_url_options
    { locale: I18n.locale }
  end

  private

  def show_maintenance
    # Vérifie si l'environnement est en production pour éviter la redirection en développement
    if Rails.env.production?
      render file: "#{Rails.root}/public/maintenance.html", layout: false
    end
  end
end
