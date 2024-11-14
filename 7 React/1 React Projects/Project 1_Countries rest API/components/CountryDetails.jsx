import LeftArrowIcon from "../assets/images/LeftArrowIcon"
import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom";

export default function CountryDetails() {
    const [countryData, setCountryData] = useState(null);
    const [notFound, setNotFound] = useState(false);

    const params = useParams();
    const countryName = params.countryDetails;

    const { state } = useLocation();

    function updateCountryData(newData) {
        setCountryData({
            flagImgUrl: newData.flags.svg,
            name: newData.name.common,
            nativeName: Object.values(newData.name.nativeName)[0].common,
            population: newData.population.toLocaleString("en-IN"),
            region: newData.region,
            subRegion: (newData.subregion) ? newData.subregion : "No subregion",
            capital: newData.capital.join(", "),
            topLevelDomain: newData.tld.join(", "),
            currency: Object.values(newData.currencies).map((currency) => currency.name).join(", "),
            languages: Object.values(newData.languages).join(", "),
            borderCountries: [],
        });

        if (newData.borders) {
            const promiseArr = newData.borders.map((border) => {
                return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                    .then((req) => req.json())
                    .then(([data]) => data.name.common);
            });

            Promise.all(promiseArr)
                .then((allBordersName) => {
                    setCountryData((previousState) => {
                        return {
                            ...previousState,
                            borderCountries: allBordersName,
                        }
                    })
                })
        }
    }

    useEffect(() => {
        if (state) {
            updateCountryData(state);
        } else {
            fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                .then((res) => res.json())
                .then(([data]) => {
                    updateCountryData(data);

                }).catch((error) => {
                    setNotFound(true);
                });
        }
    }, [countryName]);

    if (notFound) {
        return <h2>Country Not Found!</h2>;
    }

    return (
        <main className="mx-auto h-full max-w-screen-2xl px-7 py-8 dark:bg-dark-secondary sm:p-10 lg:px-16">
            <button className="mb-12 mt-2 inline-flex items-center gap-1 rounded-lg px-4 py-1 shadow-light-blur md:px-6 md:py-2 lg:gap-1.5 lg:text-lg" onClick={() => history.back()}>
                <LeftArrowIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="font-semibold">Back</span>
            </button>
            <div className="flex flex-col sm:px-8 lg:flex-row lg:gap-12 xl:gap-20">
                {
                    (countryData) ? (
                        <>
                            <img src={countryData.flagImgUrl} alt={`${countryData.name} flag`} className="md:px-12 lg:w-2/5 lg:px-0" />
                            <div className="w-full py-10">
                                <h2 className="mb-5 text-lg font-semibold sm:text-xl lg:text-2xl">{countryData.name}</h2>
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
                                            (countryData.borderCountries.length) ? (
                                                countryData.borderCountries.map((country) => {
                                                    return <Link className="rounded-md px-4 py-1 shadow-light-blur" key={country} to={`/${country}`}>{country}</Link>
                                                })
                                            ) : (
                                                <p className="-mt-4">No countries</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="xl h-36 bg-slate-200 sm:h-64 md:h-64 md:px-12 lg:h-80 lg:w-2/5 lg:px-0" />
                            <div className="w-full py-10">
                                <div className="mb-5 h-6 w-40 bg-slate-200 sm:text-xl lg:text-2xl"></div>
                                <div className="mb-5 flex flex-col gap-6 sm:flex-row sm:justify-between xl:text-lg">
                                    <div className="flex flex-col gap-2">
                                        <div className="h-4 w-56 bg-slate-200"></div>
                                        <div className="h-4 w-56 bg-slate-200"></div>
                                        <div className="h-4 w-56 bg-slate-200"></div>
                                        <div className="h-4 w-56 bg-slate-200"></div>
                                        <div className="h-4 w-56 bg-slate-200"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="h-4 w-56 bg-slate-200"></div>
                                        <div className="h-4 w-56 bg-slate-200"></div>
                                        <div className="h-4 w-56 bg-slate-200"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-4 h-5 w-44 bg-slate-200"></div>
                                    <div className="flex flex-wrap gap-4">
                                        {
                                            Array.from({ length: 7 }).map((ele, i) => (
                                                <div className="h-8 w-20 rounded-md bg-slate-200" key={i}></div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </main>
    )
}
