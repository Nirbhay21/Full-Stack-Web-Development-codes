import React from 'react'
import { useState } from 'react';
import SearchBar from "./SearchBar";
import DropDownList from "./DropDownList";
import CountryCardContainer from "./CountryCardContainer";

export default function Home() {
    const [filterRegion, setFilterRegion] = useState("");
    const [searchName, setSearchName] = useState("");

    return (
        <main className="mx-auto max-w-screen-2xl p-8 sm:p-10 lg:px-16">
            <section className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:justify-between">
                <SearchBar setSearchName={setSearchName} />
                <DropDownList setFilterRegion={setFilterRegion} />
            </section>

            {
                (searchName !== "ind") ? (
                    < CountryCardContainer filterRegion={filterRegion} searchName={searchName} />
                ) : "Removed!"
            }
        </main>
    )
}
