import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    // console.log("Fancybox Controller connecté");

    setTimeout(() => {
      if (typeof Fancybox !== "undefined") {
        const elements = document.querySelectorAll("[data-fancybox]");
        if (elements.length === 0) {
          // console.error("Aucun élément data-fancybox trouvé");
        } else {
          Fancybox.bind("[data-fancybox]", {
            // Options ici
          });
          // console.log("Fancybox initialisé");
        }
      } else {
        console.error("Fancybox n'est pas disponible");
      }
    }, 100); // Petit délai pour être sûr que tout est chargé

    // Vérifiez que Fancybox est disponible
    if (typeof Fancybox !== "undefined") {
      // Initialisez Fancybox pour les éléments ayant l'attribut data-fancybox
      Fancybox.bind("[data-fancybox]", {
        Thumbs: {
          autoStart: true,  // Active les miniatures
        },
        Toolbar: {
          display: ["close", "thumbs"],  // Active les options de navigation
        },
        infinite: true,  // Permet de naviguer en boucle dans la galerie
      });
      // console.log("Fancybox initialisé");
    } else {
      console.error("Fancybox n'est pas chargé");
    }
  }
}
