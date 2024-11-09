import { useEffect, useState } from "react"
import LeftArrowIcon from "../assets/images/LeftArrowIcon"
import { Link } from "react-router-dom";

export default function CountryDetails() {
    const [countryData, setCountryData] = useState({});

    useEffect(() => {
        const countryName = new URLSearchParams(document.location.search).get("name");

        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((res) => res.json())
            .then(([data]) => {
                setCountryData({
                    flagImgUrl: data.flags.svg,
                    name: data.name.common,
                    nativeName: Object.values(data.name.nativeName)[0].common,
                    population: data.population.toLocaleString("en-IN"),
                    region: data.region,
                    subRegion: data.subregion,
                    capital: data.capital.join(", "),
                    topLevelDomain: data.tld.join(", "),
                    currency: Object.values(data.currencies).map((currency) => currency.name).join(", "),
                    languages: Object.values(data.languages).join(", "),
                    // borderCountries: borders
                });
                console.log(data);
            });
    }, []);
    return (
        <main className="mx-auto max-w-screen-2xl px-7 py-8 sm:p-10 lg:px-16">
            <Link className="mb-12 mt-2 inline-flex items-center gap-1 rounded-lg px-4 py-1 shadow-light-blur md:px-6 md:py-2 lg:gap-1.5 lg:text-lg" to="/">
                <LeftArrowIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="font-semibold">Back</span>
            </Link>
            <div className="flex flex-col sm:px-8 lg:flex-row lg:gap-12 xl:gap-20">
                <img src={countryData.flagImgUrl} alt={`${countryData.name} flag`} className="md:px-12 lg:w-2/5 lg:px-0" />
                <div className="w-full py-10">
                    <h2 className="mb-5 text-lg font-semibold lg:text-xl">{countryData.name}</h2>
                    <div className="mb-5 flex flex-col gap-6 sm:flex-row sm:justify-between xl:text-lg">
                        <div>
                            <p><span className="font-semibold">Native Name: </span>{countryData.nativeName}</p>
                            <p><span className="font-semibold">Population: </span>{countryData.population}</p>
                            <p><span className="font-semibold">Region: </span>{countryData.region}</p>
                            <p><span className="font-semibold">Sub Region: </span>{countryData.subRegion}</p>
                            <p><span className="font-semibold">capital: </span>{countryData.capital}</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Top Level Domain: </span>{countryData.topLevelDomain}</p>
                            <p><span className="font-semibold">Currencies: </span>{countryData.currency}</p>
                            <p><span className="font-semibold">Languages: </span>{countryData.languages}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Border Countries: </h3>
                        <div className="flex flex-wrap gap-4">
                            {
                                ["Bangladesh", "Bhutan", "Myanmar", "china", "Nepal", "Pakistan"].map((country) => {
                                    return <button className="rounded-md px-4 py-1 shadow-light-blur">{country}</button>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
