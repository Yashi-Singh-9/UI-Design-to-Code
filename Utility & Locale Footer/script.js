// Object storing text for multiple languages
const translations = {
    en: {
      shortcuts: "Shortcuts",
      nameGenerator: "Name Generator",
      faq: "FAQ",
      blog: "Blog",
      contactUs: "Contact Us",
      statistics: "Statistics",
      freeTools: "Free Tools",
      theSims: "The Sims",
      imageGenerator: "Image Generator",
      smileyGenerator: "Smiley Generator",
      verbs: "Verbs",
      pinNumbers: "PIN Numbers",
      media: "Media",
      references: "References",
      languageLabel: "Language"
    },
    de: {
      shortcuts: "Verknüpfungen",
      nameGenerator: "Namensgenerator",
      faq: "FAQ",
      blog: "Blog",
      contactUs: "Kontaktieren Sie uns",
      statistics: "Statistiken",
      freeTools: "Kostenlose Tools",
      theSims: "Die Sims",
      imageGenerator: "Bildgenerator",
      smileyGenerator: "Smiley Generator",
      verbs: "Verben",
      pinNumbers: "PIN Nummern",
      media: "Medien",
      references: "Verweise",
      languageLabel: "Sprache"
    },
    es: {
      shortcuts: "Accesos directos",
      nameGenerator: "Generador de nombres",
      faq: "FAQ",
      blog: "Blog",
      contactUs: "Contáctenos",
      statistics: "Estadísticas",
      freeTools: "Herramientas gratuitas",
      theSims: "Los Sims",
      imageGenerator: "Generador de imágenes",
      smileyGenerator: "Generador de sonrisas",
      verbs: "Verbos",
      pinNumbers: "Números PIN",
      media: "Medios",
      references: "Referencias",
      languageLabel: "Idioma"
    },
    fr: {
      shortcuts: "Raccourcis",
      nameGenerator: "Générateur de noms",
      faq: "FAQ",
      blog: "Blog",
      contactUs: "Contactez-nous",
      statistics: "Statistiques",
      freeTools: "Outils gratuits",
      theSims: "Les Sims",
      imageGenerator: "Générateur d'images",
      smileyGenerator: "Générateur de smileys",
      verbs: "Verbes",
      pinNumbers: "Numéros PIN",
      media: "Médias",
      references: "Références",
      languageLabel: "Langue"
    },
    it: {
      shortcuts: "Collegamenti",
      nameGenerator: "Generatore di nomi",
      faq: "FAQ",
      blog: "Blog",
      contactUs: "Contattaci",
      statistics: "Statistiche",
      freeTools: "Strumenti gratuiti",
      theSims: "The Sims",
      imageGenerator: "Generatore di immagini",
      smileyGenerator: "Generatore di faccine",
      verbs: "Verbi",
      pinNumbers: "Numeri PIN",
      media: "Media",
      references: "Riferimenti",
      languageLabel: "Lingua"
    }
  };
  
  // Function to switch language
  function switchLanguage(language) {
    const elements = {
      shortcuts: document.querySelector(".shortcuts h4"),
      nameGenerator: document.querySelector(".name-generator"),
      faq: document.querySelector(".faq"),
      blog: document.querySelector(".blog"),
      contactUs: document.querySelector(".contact-us"),
      statistics: document.querySelector(".statistics"),
      freeTools: document.querySelector(".free-tools"),
      theSims: document.querySelector(".the-sims"),
      imageGenerator: document.querySelector(".image-generator"),
      smileyGenerator: document.querySelector(".smiley-generator"),
      verbs: document.querySelector(".verbs"),
      pinNumbers: document.querySelector(".pin-numbers"),
      media: document.querySelector(".media"),
      references: document.querySelector(".references"),
      languageLabel: document.querySelector(".language label")
    };
  
    // Update text based on selected language
    Object.keys(elements).forEach((key) => {
      if (elements[key]) {
        elements[key].textContent = translations[language][key];
      }
    });
  }
  
  // Event listener for language change
  document.getElementById("language-select").addEventListener("change", (e) => {
    switchLanguage(e.target.value);
  });
  
  // Event listener for link click to change color
  const links = document.querySelectorAll(".links a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove selected class from all links
      links.forEach((l) => l.classList.remove("selected"));
  
      // Add selected class to the clicked link
      this.classList.add("selected");
    });
  });
  
  // Initial language setup (Default: English)
  switchLanguage("en");
  