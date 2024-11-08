export default function CountryCard({ imgUrl, name, population, region, capital }) {
    return (
        <a href={`/countryDetails?name=${name}`} className="overflow-hidden rounded-md shadow-light-blur">
            <img src={imgUrl} alt={`${name}_flag`} loading="lazy" className="h-48 w-full object-fill" />
            <div className="px-5 py-6">
                <h3 className="mb-2 text-lg font-bold lg:text-xl">{name}</h3>
                <p className="font-semibold text-primary lg:text-lg">Population: <span className="font-normal">{population}</span></p>
                <p className="font-semibold text-primary lg:text-lg">Region: <span className="font-normal">{region}</span></p>
                <p className="font-semibold text-primary lg:text-lg">capital: <span className="font-normal">{capital}</span></p>
            </div>
        </a>
    )
}
