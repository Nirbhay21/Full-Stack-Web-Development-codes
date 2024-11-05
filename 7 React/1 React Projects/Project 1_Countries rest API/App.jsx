import { Fragment, useState } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar";
import DropDownList from "./components/DropDownList";
import CountryCardContainer from "./components/CountryCardContainer";

export default function () {
    const [filterRegion, setFilterRegion] = useState("");
    const [searchName, setSearchName] = useState("");
    return (
        <Fragment>
            <Header />
            <main className="mx-auto max-w-screen-2xl p-8 sm:p-10 lg:px-16">
                <section className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:justify-between">
                    <SearchBar setSearchName={setSearchName} />
                    <DropDownList setFilterRegion={setFilterRegion} />
                </section>

                <CountryCardContainer filterRegion={filterRegion} searchName={searchName} />
            </main>
        </Fragment>
    );
}