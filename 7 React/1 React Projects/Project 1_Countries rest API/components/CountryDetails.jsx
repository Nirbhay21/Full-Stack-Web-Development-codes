import { useEffect, useState } from "react"
import LeftArrowIcon from "../assets/images/LeftArrowIcon"

export default function CountryDetails() {
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(document.location.search);
        const countryName = params.get("name")

        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((res) => res.json())
            .then((data) => {
                setCountryData(data);
                console.log(data);
            });
    }, []);
    return (
        <main className="mx-auto max-w-screen-2xl px-7 py-8 sm:p-10 lg:px-16">
            <button className="mb-12 mt-2 flex items-center gap-1 rounded-lg px-4 py-1 shadow-light-blur md:px-6 md:py-2 lg:gap-1.5 lg:text-lg">
                <LeftArrowIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="font-semibold">Back</span>
            </button>
            <div className="flex flex-col sm:px-8 lg:flex-row lg:gap-12 xl:gap-20">
                <img src="https://flagcdn.com/in.svg" alt="country_image" className="md:px-12 lg:w-2/5 lg:px-0" />
                <div className="w-full py-10">
                    <h2 className="mb-5 text-lg font-semibold lg:text-xl">India</h2>
                    <div className="mb-5 flex flex-col gap-6 sm:flex-row sm:justify-between xl:text-lg">
                        <div>
                            <p><span className="font-semibold">Native Name: </span>India</p>
                            <p><span className="font-semibold">Population: </span>1380004385</p>
                            <p><span className="font-semibold">Region: </span>Asia</p>
                            <p><span className="font-semibold">Sub Region: </span>Southern Asia</p>
                            <p><span className="font-semibold">capital: </span>Delhi</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Top Level Domain: </span>.in</p>
                            <p><span className="font-semibold">Currencies: </span>Indian rupee - ₹</p>
                            <p><span className="font-semibold">Languages: </span>English, Hindi, Tamil</p>
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
