import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Cards Controller connecté");

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
  }
}
