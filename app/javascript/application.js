// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Application } from "@hotwired/stimulus";
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading";
import "@popperjs/core";
import "bootstrap";

// Stimulus
const application = Application.start();
application.debug = false;

eagerLoadControllersFrom("controllers", application);

window.Stimulus = application;

// Pour cacher la navbar au défilement
document.addEventListener("turbo:load", () => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  let lastScrollTop = 0;
  const scrollThreshold = 100; // Le seuil en pixels avant de commencer la disparition

  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Seulement appliquer la classe après avoir dépassé le seuil
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      navbar.classList.add("navbar-hidden");
    } else if (scrollTop < lastScrollTop) {
      navbar.classList.remove("navbar-hidden");
    }

    lastScrollTop = scrollTop;
  });
});
