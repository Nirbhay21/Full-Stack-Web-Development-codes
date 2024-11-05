import React from 'react'
import LightModeIcon from "../assets/images/LightModeIcon"

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="mx-auto flex max-w-screen-2xl items-center justify-between p-4 text-primary sm:px-4">
                <h2 className="text-lg font-bold sm:text-xl lg:text-2xl"><a href="#">Where in the world?</a></h2>
                <a className="flex items-center gap-1.5 lg:gap-2" href="#">
                    <LightModeIcon className="h-4 w-4 fill-current lg:h-5 lg:w-5" />
                    <span className="text-sm font-semibold sm:text-base lg:text-xl">Dark Mode</span>
                </a>
            </div>
        </header>
    )
}
