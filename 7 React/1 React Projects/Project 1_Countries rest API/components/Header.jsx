import React from 'react'
import DarkModeIcon from "../assets/images/DarkModeIcon"

export default function Header() {
    return (
        <header className="shadow-md">
            <div className="mx-auto flex max-w-screen-2xl items-center justify-between bg-white p-4 text-primary dark:bg-dark-primary dark:text-dark-text-primary sm:px-4">
                <h2 className="text-lg font-bold sm:text-xl lg:text-2xl"><a href="#">Where in the world?</a></h2>
                <a className="flex items-center gap-1.5 lg:gap-2" href="#" onClick={() => {
                    document.body.classList.toggle("dark");
                }}>
                    <DarkModeIcon className="h-4 w-4 fill-current lg:h-5 lg:w-5" />
                    <span className="text-sm font-semibold sm:text-base lg:text-xl">Dark Mode</span>
                </a>
            </div>
        </header>
    )
}
