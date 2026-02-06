document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".filter-btn");
    const cryptoList = document.getElementById("crypto-list");
    const searchInput = document.getElementById("search-input");
  
    // Cryptocurrencies data
    const cryptocurrencies = {
      all: [
        {
          name: "BTC",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
        },
        {
          name: "ETH",
          imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReL4mwia-Frme-z1cPQwWECjzMKJmOTWR7g&s"
        },
        {
          name: "Doge",
          imgSrc: "https://s2.coinmarketcap.com/static/img/coins/200x200/74.png"
        },
        {
          name: "ALGO",
          imgSrc:
            "https://assets.coingecko.com/coins/images/4380/large/download.png?1696504978"
        },
        {
          name: "ADA",
          imgSrc:
            "https://media.licdn.com/dms/image/D4D12AQGjTvu3fZtUng/article-cover_image-shrink_720_1280/0/1683369121916?e=2147483647&v=beta&t=O4R6Qb4xQ2GjpZnGjBJLUnKKFzZIqv0Cb_pNJmfDvkA"
        },
        {
          name: "LUNA",
          imgSrc:
            "https://research.icrypex.com/wp-content/uploads/2023/03/luna-coin-terra-lunaya-ne-oldu.jpg"
        }
      ],
      usdt: [
        {
          name: "BTC",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
        },
        {
          name: "ETH",
          imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReL4mwia-Frme-z1cPQwWECjzMKJmOTWR7g&s"
        },
        {
          name: "ADA",
          imgSrc:
            "https://media.licdn.com/dms/image/D4D12AQGjTvu3fZtUng/article-cover_image-shrink_720_1280/0/1683369121916?e=2147483647&v=beta&t=O4R6Qb4xQ2GjpZnGjBJLUnKKFzZIqv0Cb_pNJmfDvkA"
        },
        {
          name: "Doge",
          imgSrc: "https://s2.coinmarketcap.com/static/img/coins/200x200/74.png"
        }
      ],
      busd: [
        {
          name: "ALGO",
          imgSrc:
            "https://assets.coingecko.com/coins/images/4380/large/download.png?1696504978"
        },
        {
          name: "LUNA",
          imgSrc:
            "https://research.icrypex.com/wp-content/uploads/2023/03/luna-coin-terra-lunaya-ne-oldu.jpg"
        }
      ]
    };
  
    // Favorites array
    let favorites = [
      {
        name: "ALGO",
        imgSrc:
          "https://assets.coingecko.com/coins/images/4380/large/download.png?1696504978"
      }
    ];
  
    // Function to render the crypto list based on the selected category and search term
    function renderCryptoList(category, searchTerm = "") {
      cryptoList.innerHTML = ""; // Clear previous content
  
      const cryptosToDisplay =
        category === "favorite" ? favorites : cryptocurrencies[category];
  
      // Filter by search term
      const filteredCryptos = cryptosToDisplay.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      // Check if there are no results
      if (filteredCryptos.length === 0) {
        const noResultsMessage = document.createElement("li");
        noResultsMessage.textContent = "No results found";
        noResultsMessage.classList.add("no-results");
        cryptoList.appendChild(noResultsMessage);
        return; // Exit the function early if no results
      }
  
      filteredCryptos.forEach((crypto) => {
        const listItem = document.createElement("li");
        listItem.classList.add("crypto-item");
  
        // Set ETH as selected by default if in "all" tab
        if (crypto.name === "ETH" && category === "all") {
          listItem.classList.add("selected");
        }
  
        const isFavorite = favorites.some((fav) => fav.name === crypto.name);
  
        listItem.innerHTML = `
          <div class="icon">
            <img src="${crypto.imgSrc}" alt="${crypto.name}">
            ${crypto.name}
          </div>
          <span class="heart">
            <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
          </span>
        `;
  
        // Favorite toggle handler
        listItem
          .querySelector(".heart")
          .addEventListener("click", function (event) {
            event.stopPropagation(); // Stop propagation to avoid selecting the item
            const heartIcon = this.querySelector("i");
  
            // Toggle favorite status
            if (isFavorite) {
              favorites = favorites.filter((fav) => fav.name !== crypto.name);
            } else {
              favorites.push(crypto);
            }
  
            // Update the heart icon
            heartIcon.classList.toggle("fa-regular");
            heartIcon.classList.toggle("fa-solid");
  
            // If in the favorites tab, re-render it to reflect changes
            if (category === "favorite") renderCryptoList("favorite");
          });
  
        // Click handler for selecting crypto item
        listItem.addEventListener("click", () => {
          document.querySelectorAll(".crypto-item").forEach((item) => {
            item.classList.remove("selected");
          });
          listItem.classList.add("selected");
        });
  
        cryptoList.appendChild(listItem);
      });
    }
  
    // Tab click handler to filter cryptocurrencies
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
  
        const selectedTab = tab.getAttribute("data-tab");
        renderCryptoList(selectedTab, searchInput.value); // Pass the current search value
      });
    });
  
    // Search input handler
    searchInput.addEventListener("input", function () {
      const selectedTab = document
        .querySelector(".filter-btn.active")
        .getAttribute("data-tab");
      renderCryptoList(selectedTab, this.value); // Pass the current input value
    });
  
    // Initial render for the "All" tab
    renderCryptoList("all");
  });
  