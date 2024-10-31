import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementButtonHandler = () => {
        setCount((previousState) => {
            console.log(previousState);
            return previousState + 1;
        });
        setCount((previousState) => {
            console.log(previousState);
            return previousState + 1;
        });
    }
    const decrementButtonHandler = () => {
        setCount((previousState) => {
            console.log(previousState);
            return previousState - 1;
        });
        setCount((previousState) => {
            console.log(previousState);
            return previousState - 1;
        });
    }

    console.log("Rendering")

    return (
        <div className="mt-4 flex flex-col items-center gap-6">
            <h2 className="text-4xl font-semibold">{count}</h2>
            <div className="flex gap-8">
                <button className="py-md rounded-sm border-2 border-gray-400 bg-slate-300 px-3 py-1 hover:border-gray-600 active:bg-slate-400"
                    onClick={decrementButtonHandler}>Decrement</button>
                <button className="py-md rounded-sm border-2 border-gray-400 bg-slate-300 px-3 py-1 hover:border-gray-600 active:bg-slate-400"
                    onClick={incrementButtonHandler}>Increment</button>
            </div>
        </div>
    )
}