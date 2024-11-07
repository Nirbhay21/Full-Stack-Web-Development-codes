import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountryCardContainer({ filterRegion, searchName }) {
    const [countriesData, setCountriesData] = useState([]);

    let filteredCountries = countriesData;
    if (filterRegion) {
        filteredCountries = countriesData.filter((country) => {
            return country.continents.includes(filterRegion);
        });
    } else if (searchName) {
        filteredCountries = countriesData.filter((country) => {
            return country.name.common.toLowerCase().includes(searchName);
        });
    }

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCountriesData(data);
            });
    }, []);

    return (
        <div className="grid-cols grid auto-cols-auto grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 px-4 sm:gap-10 sm:px-0 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {
                filteredCountries.map((countryData) => {
                    return (
                        <CountryCard
                            imgUrl={countryData.flags.png}
                            name={countryData.name.common}
                            population={countryData.population.toLocaleString("en-IN")}
                            region={countryData.region}
                            capital={(countryData.capital) || "No Capital"}
                            key={countryData.name.common}
                        />
                    );
                })
            }
        </div>
    )
}
