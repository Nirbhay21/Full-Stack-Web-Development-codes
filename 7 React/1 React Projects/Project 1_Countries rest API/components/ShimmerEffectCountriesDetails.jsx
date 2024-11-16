import React from 'react'

export default function ShimmerEffectCountriesDetails() {
    return (
        <>
            <div className="xl h-[45vw] bg-slate-200 dark:bg-slate-600 sm:h-[40vw] md:px-12 lg:h-96 lg:w-2/5 lg:px-0" />
            <div className="w-full py-10">
                <div className="mb-5 h-6 w-40 bg-slate-200 dark:bg-slate-600 sm:text-xl lg:text-2xl"></div>
                <div className="mb-5 flex flex-col gap-6 sm:flex-row sm:justify-between xl:text-lg">
                    <div className="flex flex-col gap-2">
                        <div className="h-4 w-56 bg-slate-200 dark:bg-slate-600"></div>
                        <div className="h-4 w-56 bg-slate-200 dark:bg-slate-600"></div>
                        <div className="h-4 w-56 bg-slate-200 dark:bg-slate-600"></div>
                        <div className="h-4 w-56 bg-slate-200 dark:bg-slate-600"></div>
                        <div className="h-4 w-56 bg-slate-200 dark:bg-slate-600"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="h-4 w-56 bg-slate-200 dark:bg-slate-600"></div>
                        <div className="h-4 w-56 bg-slate-200 dark:bg-slate-600"></div>
                        <div className="h-4 w-56 bg-slate-200 dark:bg-slate-600"></div>
                    </div>
                </div>
                <div>
                    <div className="mb-4 h-5 w-44 bg-slate-200 dark:bg-slate-600"></div>
                    <div className="flex flex-wrap gap-4">
                        {
                            Array.from({ length: 7 }).map((ele, i) => (
                                <div className="h-8 w-20 rounded-md bg-slate-200 shadow-light-blur dark:bg-slate-600 dark:shadow-dark-blur" key={i}></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
