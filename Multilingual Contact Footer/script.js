document.addEventListener("DOMContentLoaded", function () {
    const languageLinks = document.querySelectorAll(".languages a");
  
    const contentData = {
      de: {
        about: "Über den Laden",
        links: [
          "Startseite",
          "Kunde werden",
          "Über uns",
          "FAQ",
          "Rückgaberecht",
          "Kontakt"
        ],
        language: "Sprache",
        contact: "Kontakt aufnehmen",
        footer: ["Kaufbedingungen", "Sicherheit und Datenschutz", "Newsletter"]
      },
      en: {
        about: "About the store",
        links: [
          "Home",
          "Become a customer",
          "About us",
          "FAQ",
          "Return policy",
          "Contact us"
        ],
        language: "Language",
        contact: "Get in touch",
        footer: ["Terms of purchase", "Security and privacy", "Newsletter"]
      },
      es: {
        about: "Sobre la tienda",
        links: [
          "Inicio",
          "Hazte cliente",
          "Sobre nosotros",
          "Preguntas frecuentes",
          "Política de devoluciones",
          "Contáctenos"
        ],
        language: "idioma",
        contact: "Ponte en contacto",
        footer: ["Términos de compra", "Seguridad y privacidad", "Boletín"]
      },
      fr: {
        about: "À propos du magasin",
        links: [
          "Accueil",
          "Devenir client",
          "À propos de nous",
          "FAQ",
          "Politique de retour",
          "Nous contacter"
        ],
        language: "langue",
        contact: "Entrer en contact",
        footer: [
          "Conditions d'achat",
          "Sécurité et confidentialité",
          "Newsletter"
        ]
      },
      id: {
        about: "Tentang toko",
        links: [
          "Beranda",
          "Menjadi pelanggan",
          "Tentang kami",
          "FAQ",
          "Kebijakan pengembalian",
          "Hubungi kami"
        ],
        language: "bahasa",
        contact: "Hubungi kami",
        footer: ["Syarat pembelian", "Keamanan dan privasi", "Newsletter"]
      },
      it: {
        about: "Informazioni sul negozio",
        links: [
          "Home",
          "Diventa cliente",
          "Chi siamo",
          "FAQ",
          "Politica di reso",
          "Contattaci"
        ],
        language: "lingua",
        contact: "Mettiti in contatto",
        footer: ["Condizioni di acquisto", "Sicurezza e privacy", "Newsletter"]
      },
      nl: {
        about: "Over de winkel",
        links: [
          "Home",
          "Klant worden",
          "Over ons",
          "FAQ",
          "Retourbeleid",
          "Contact"
        ],
        language: "taal",
        contact: "Neem contact op",
        footer: ["Aankoopvoorwaarden", "Veiligheid en privacy", "Nieuwsbrief"]
      },
      pl: {
        about: "O sklepie",
        links: [
          "Strona główna",
          "Zostań klientem",
          "O nas",
          "FAQ",
          "Polityka zwrotów",
          "Skontaktuj się z nami"
        ],
        language: "język",
        contact: "Skontaktuj się",
        footer: ["Warunki zakupu", "Bezpieczeństwo i prywatność", "Newsletter"]
      },
      pt: {
        about: "Sobre a loja",
        links: [
          "Início",
          "Seja um cliente",
          "Sobre nós",
          "FAQ",
          "Política de devolução",
          "Contate-nos"
        ],
        language: "língua",
        contact: "Entre em contato",
        footer: ["Termos de compra", "Segurança e privacidade", "Newsletter"]
      },
      ru: {
        about: "О магазине",
        links: [
          "Главная",
          "Станьте клиентом",
          "О нас",
          "FAQ",
          "Политика возврата",
          "Свяжитесь с нами"
        ],
        language: "язык",
        contact: "Связаться",
        footer: [
          "Условия покупки",
          "Безопасность и конфиденциальность",
          "Рассылка"
        ]
      },
      vi: {
        about: "Về cửa hàng",
        links: [
          "Trang chủ",
          "Trở thành khách hàng",
          "Về chúng tôi",
          "FAQ",
          "Chính sách hoàn trả",
          "Liên hệ với chúng tôi"
        ],
        language: "ngôn ngữ",
        contact: "Liên lạc",
        footer: ["Điều khoản mua hàng", "Bảo mật và quyền riêng tư", "Bản tin"]
      },
      tr: {
        about: "Mağaza hakkında",
        links: [
          "Ana Sayfa",
          "Müşteri olun",
          "Hakkımızda",
          "SSS",
          "İade politikası",
          "Bize ulaşın"
        ],
        language: "dil",
        contact: "İletişime geçin",
        footer: ["Satın alma koşulları", "Güvenlik ve gizlilik", "Bülten"]
      }
    };
  
    function updateContent(language) {
      const aboutHeader = document.querySelector(
        ".footer-column:nth-child(1) h3"
      );
      const linkList = document.querySelectorAll(
        ".footer-column:nth-child(1) ul li a"
      );
      const contactHeader = document.querySelector(
        ".footer-column:nth-child(3) h3"
      );
      const footerLinks = document.querySelectorAll(".footer-bottom a");
      const languageHeader = document.querySelector(
        ".footer-column:nth-child(2) h3"
      );
  
      if (contentData[language]) {
        // Update the 'About the store' section
        aboutHeader.textContent = contentData[language].about;
        linkList.forEach((link, index) => {
          link.textContent = contentData[language].links[index];
        });
  
        // Update the 'Language' section
        languageHeader.textContent = contentData[language].language;
  
        // Update the 'Get in touch' section
        contactHeader.textContent = contentData[language].contact;
  
        // Update the footer links
        footerLinks.forEach((footerLink, index) => {
          footerLink.textContent = contentData[language].footer[index];
        });
      }
    }
  
    languageLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior
  
        // Remove active class from all links
        languageLinks.forEach((l) => l.classList.remove("active"));
  
        // Add active class to the clicked link
        e.target.classList.add("active");
  
        // Update the content based on the selected language
        const selectedLanguage = e.target.dataset.lang;
        updateContent(selectedLanguage);
      });
    });
  
    // Initialize with the default language
    const defaultLanguage = "en";
    updateContent(defaultLanguage);
    document
      .querySelector(`[data-lang="${defaultLanguage}"]`)
      .classList.add("active");
  });
  