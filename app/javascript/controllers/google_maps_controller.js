import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["map"];

  connect() {
    console.log("Google Maps Controller connecté");
    this.coordinates = { lat: 46.64008648981988, lng: 7.0617587396999495 };
    this.loadGoogleMapsAPI();
    this.directionButtons(); // Initialise les gestionnaires d'événements
  }

  openDirections(event) {
    event.preventDefault(); // Empêche le comportement par défaut du clic, si applicable
    console.log("Flèche cliquée !");

    // Coordonnées de l'emplacement
    const { lat, lng } = this.coordinates;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

    console.log(`Ouverture de Google Maps : ${googleMapsUrl}`); // Pour le débogage
    window.open(googleMapsUrl, "_blank"); // Ouvre Google Maps dans un nouvel onglet
  }

  loadGoogleMapsAPI() {
    if (document.querySelector("script[src*='maps.googleapis.com']")) {
      console.log("Google Maps API déjà chargée");
      this.initMap();
      return;
    }

    window.initMap = this.initMap.bind(this);

    const script = document.createElement("script");
    const apiKey = window.googleMapsApiKey;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=marker`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  initMap() {
    console.log("Google Maps API chargée et carte initialisée");

    const map = new google.maps.Map(this.mapTarget, {
      zoom: 16,
      center: { lat: 46.64008648981988, lng: 7.0617587396999495 },
      mapId: "b4f4c0c8903d1d38",
    });

    // Utiliser AdvancedMarkerElement pour le marqueur
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: { lat: 46.64008648981988, lng: 7.0617587396999495 },
      title: "Votre emplacement", // Info-bulle au survol
    });

    // Ajouter une fenêtre d'information (facultatif)
    const infoWindow = new google.maps.InfoWindow({
      content: "Bienvenue à votre emplacement !",
    });
  }

  directionButtons() {
    document.querySelectorAll(".fa-directions").forEach((icon) => {
      icon.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut
        console.log("Flèche cliquée !");

        // Coordonnées pour l'itinéraire
        const lat = this.coordinates.lat;
        const lng = this.coordinates.lng;
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

        console.log(`Ouverture de Google Maps : ${googleMapsUrl}`);
        window.open(googleMapsUrl, "_blank"); // Ouvre dans un nouvel onglet
      });
    });
  }

}
