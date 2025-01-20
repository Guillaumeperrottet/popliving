import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Dynamic text Controller connecté");

    const dynamicText = document.querySelector(".concept-hero-dynamic-text");
    if (!dynamicText) return;

    const messages = [
      "Vivez différemment.",
      "Partagez des espaces uniques.",
      "Simplifiez votre quotidien.",
    ];
    let index = 0;

    function changeText() {
      dynamicText.classList.remove("fade-in", "fade-out");
      void dynamicText.offsetWidth;
      dynamicText.classList.add("fade-out");

      setTimeout(() => {
        index = (index + 1) % messages.length;
        dynamicText.textContent = messages[index];
        dynamicText.classList.remove("fade-out");
        void dynamicText.offsetWidth;
        dynamicText.classList.add("fade-in");
      }, 500);
    }

    dynamicText.textContent = messages[index];
    dynamicText.classList.add("fade-in");

    setInterval(changeText, 3000);
  }
}
