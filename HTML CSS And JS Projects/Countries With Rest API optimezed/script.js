const countriesContainer = document.querySelector(".countries-cards");

fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        for (let cardData of data) {
            const card = document.createElement("a");
            card.href = `/country.html?name=${cardData.name.common}`;
            card.classList.add("country-card");

            card.innerHTML = `
                <img class="country-card__flag" src="${cardData.flags.svg}" loading="lazy">
                <div class="country-card__text">
                    <h3 class="country-card__name">${cardData.name.common}</h3>
                    <p class="country-card__population"><b>Population: </b>${cardData.population.toLocaleString("en-IN")}</p>
                    <p class="country-card__region"><b>Region: </b>${cardData.region}</p>
                    <p class="country-card__capital"><b>Capital: </b>${(cardData.capital) ? cardData.capital.join(", ") : "No capital"}</p>
                </div>
            `;

            countriesContainer.appendChild(card);
        }
    });


