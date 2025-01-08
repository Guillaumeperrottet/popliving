// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"

document.addEventListener("turbo:load", function () {
  if (typeof Fancybox !== "undefined") {
    console.log("Fancybox loaded with Turbo");
    Fancybox.bind("[data-fancybox]", {
      // Options personnalisées
    });
  } else {
    console.error("Fancybox is not loaded");
  }
});



// Pour cacher la navbar au défilement
document.addEventListener("turbo:load", function() {
  const navbar = document.querySelector(".navbar");

  let lastScrollTop = 0;
  let scrollThreshold = 100; // Le seuil en pixels avant de commencer la disparition

  window.addEventListener("scroll", function() {
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
