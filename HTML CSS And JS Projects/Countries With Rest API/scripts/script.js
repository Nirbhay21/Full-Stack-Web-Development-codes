const endContainer = document.querySelector("body .end-container");
const colorMode = document.querySelector(".nav-bar .color-mode");
const homeFragment = document.querySelector("main .home-fragment");
const countriesCardSection = document.querySelector(".countries-card-section");
const searchBox = document.querySelector(".search-filter-section .search-box");
const filterMenu = document.querySelector(".filter-menu ul");

const nextFragment = document.querySelector(".next-fragment");
const backButton = document.querySelector(".country-description-section .back-button");
const countryImage = document.querySelector(".country-description .country-image img");
const countryName = document.querySelector(".country-information .name");
const countryNativeName = document.querySelector(".country-information .native-name span");
const countryPopulation = document.querySelector(".country-information .population span");
const countryRegion = document.querySelector(".country-information .region span");
const countrySubregion = document.querySelector(".country-information .sub-region span");
const countryCapital = document.querySelector(".country-information .capital span");
const countryTopLevelDomain = document.querySelector(".country-information .top-level-domain span");
const countryCurrencies = document.querySelector(".country-information .currencies span");
const countryLanguages = document.querySelector(".country-information .languages span");
const countryBorderCountries = document.querySelector(".country-information .border-countries .countries");

let countriesData;

colorMode.addEventListener("click", () => {
    if (endContainer.classList.contains("light-mode")) {
        endContainer.classList.remove("light-mode");
        endContainer.classList.add("dark-mode");
    } else if (endContainer.classList.contains("dark-mode")) {
        endContainer.classList.remove("dark-mode");
        endContainer.classList.add("light-mode");
    }
});

const openCountryCardOnClick = (cardContainer) => {
    const showCountryData = (countryData) => {
        console.log(countryData);
        countryImage.src = countryData.flags.svg;
        countryName.innerText = countryData.name.common;
        countryNativeName.innerText = Object.values(countryData.name.nativeName)[0].common;
        countryPopulation.innerText = countryData.population.toLocaleString();
        countryRegion.innerText = countryData.region;
        countrySubregion.innerText = countryData.subregion;
        if (countryData.capital) {
            countryCapital.innerText = countryData.capital.join(", ");
        } else {
            countryCapital.innerText = "none";
        }
        if (countryData.tld) {
            countryTopLevelDomain.innerText = countryData.tld.join(", ");
        } else {
            countryTopLevelDomain.innerText = "none";
        }

        countryCurrencies.innerText = `${Object.values(countryData.currencies)[0].name} - ${Object.values(countryData.currencies)[0].symbol}`;
        countryLanguages.innerText = Object.values(countryData.languages).join(", ")

        const borderCountries = [];
        if (countryData.borders) {
            for (let i = 0; i < countryData.borders.length; i++) {
                const borderCountiesData = countriesData.filter((country) => {
                    return country.fifa === countryData.borders[i] || country.cca3 === countryData.borders[i];
                })[0];
                if (borderCountiesData?.name?.common) {
                    const countryLabel = document.createElement("label");
                    countryLabel.innerText = borderCountiesData.name.common;
                    borderCountries.push(countryLabel);
                }
            }
            countryBorderCountries.innerHTML = "";
            countryBorderCountries.append(...borderCountries);
        } else {
            countryBorderCountries.innerHTML = "<b>Don't have any country connected by land.</b>"
        }
    }

    countryBorderCountries.addEventListener("click", (event) => {
        const clickCountry = event.target.closest("label");
        if (clickCountry) {
            const countryName = clickCountry.innerText;
            const countryData = countriesData.filter((country) => country.name.common.startsWith(countryName))[0];
            showCountryData(countryData);
        }
    });

    cardContainer.addEventListener("click", (event) => {
        const clickedCard = event.target.closest(".country-card");
        if (clickedCard) {
            homeFragment.classList.add("hide");
            nextFragment.classList.remove("hide");

            const countryName = clickedCard.querySelector(".country-info .country-name").innerText;
            const countryData = countriesData.filter((country) => country.name.common.startsWith(countryName))[0];

            showCountryData(countryData);
        }
    });
}

backButton.addEventListener("click", () => {
    nextFragment.classList.add("hide");
    homeFragment.classList.remove("hide");
});

const displayAllCountriesCards = (countriesData) => {
    const countriesCardSection = document.querySelector(".countries-card-section");
    if (countriesCardSection.firstElementChild) {
        countriesCardSection.firstElementChild.remove();
    }

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    for (let i = 0; i < countriesData.length; i++) {
        const card = document.createElement("div");
        card.classList.add("country-card");

        const countryFlag = document.createElement("img");
        countryFlag.classList.add("country-flag");
        countryFlag.setAttribute("loading", "lazy");
        countryFlag.src = countriesData[i].flags.svg;

        const countryInfo = document.createElement("div");
        countryInfo.classList.add("country-info");

        const countryName = document.createElement("h4");
        countryName.classList.add("country-name");
        countryName.innerText = countriesData[i].name.common;

        const countryPopulation = document.createElement("label");
        countryPopulation.classList.add("country-population");
        countryPopulation.innerText = "Population: ";

        const population = document.createElement("span");
        population.innerText = countriesData[i].population.toLocaleString();
        countryPopulation.appendChild(population);

        const countryRegion = document.createElement("label");
        countryRegion.classList.add("country-population");
        countryRegion.innerText = "Region: ";

        const region = document.createElement("span");
        region.innerText = countriesData[i].region;
        countryRegion.appendChild(region);

        const countryCapital = document.createElement("label");
        countryCapital.classList.add("country-population");
        countryCapital.innerText = "Capital: ";

        const capital = document.createElement("span");
        if (countriesData[i].capital) {
            capital.innerText = countriesData[i].capital.join();
        } else {
            capital.innerText = "none";
        }
        countryCapital.appendChild(capital);

        countryInfo.append(countryName, countryPopulation, countryRegion, countryCapital);
        card.append(countryFlag, countryInfo);

        cardContainer.appendChild(card);
    }

    openCountryCardOnClick(cardContainer);

    countriesCardSection.appendChild(cardContainer);
}

filterMenu.addEventListener("click", (event) => {
    const filterRegion = event.target.closest("li").innerText;
    if (filterRegion) {
        const filteredCountries = countriesData.filter((country) => country.region === filterRegion || country.subregion === filterRegion);
        displayAllCountriesCards(filteredCountries);
    }

    searchBox.value = "";
});

fetch("https://restcountries.com/v3.1/all")
    .then((request) => request.json())
    .then((data) => {
        countriesData = data
        countriesData.sort((current, next) => next.population - current.population);
        displayAllCountriesCards(countriesData);
    })

searchBox.addEventListener("input", (event) => {
    const searchName = event.target.value.toLowerCase();
    const filteredCountries = countriesData.filter((country) => {
        return country.name.common.toLowerCase().indexOf(searchName) >= 0;
    });
    displayAllCountriesCards(filteredCountries);
});