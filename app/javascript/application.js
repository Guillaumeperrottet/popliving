// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import "@popperjs/core";
import "bootstrap";

// Fancybox avec Turbo
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
document.addEventListener("turbo:load", function () {
  const navbar = document.querySelector(".navbar");

  let lastScrollTop = 0;
  let scrollThreshold = 100; // Le seuil en pixels avant de commencer la disparition

  window.addEventListener("scroll", function () {
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

// Observer pour les cartes
document.addEventListener("turbo:load", () => {
  const serviceCards = document.querySelectorAll(".concept-service-card");
  if (serviceCards.length === 0) return; // Quitte si aucune carte n'est présente

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Carte en vue :", entry.target);
          entry.target.classList.add("concept-visible");
          entry.target.classList.remove("concept-hidden");
        }
      });
    },
    { threshold: 0.5 }
  );

  serviceCards.forEach((card) => observer.observe(card));
});

// Texte dynamique
document.addEventListener("turbo:load", () => {
  const dynamicText = document.querySelector(".concept-hero-dynamic-text");
  if (!dynamicText) return; // Quitte si l'élément n'est pas présent

  const messages = [
    "Vivez différemment.",
    "Partagez des espaces uniques.",
    "Simplifiez votre quotidien.",
  ];
  let index = 0;

  function changeText() {
    // Disparition du texte actuel
    dynamicText.classList.remove("fade-in", "fade-out");
    void dynamicText.offsetWidth; // Force le reflow pour réinitialiser l'animation
    dynamicText.classList.add("fade-out");

    setTimeout(() => {
      // Mise à jour du texte
      index = (index + 1) % messages.length;
      dynamicText.textContent = messages[index];

      // Apparition du nouveau texte
      dynamicText.classList.remove("fade-out");
      void dynamicText.offsetWidth; // Force le reflow
      dynamicText.classList.add("fade-in");
    }, 500); // Durée de disparition (fade-out)
  }

  // Initialisation
  dynamicText.textContent = messages[index];
  dynamicText.classList.add("fade-in");

  // Changement toutes les 3 secondes
  setInterval(changeText, 3000);
});
