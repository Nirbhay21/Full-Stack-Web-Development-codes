// const Basket = ({ applesCount, basketName, full, empty }) => {
//     return (
//         <div className="flex flex-1 flex-col items-center gap-2 p-4">
//             <h2 className="text-xl font-bold">{applesCount} Apples</h2>
//             <h3 className="text-lg">{basketName} {(full) ? "(Full)" : (empty) ? "(Empty)" : ""}</h3>
//         </div>
//     );
// }

const Basket = ({ applesCount, basketName }) => {
    const basketState = (applesCount == 10) ? "(full)" : (applesCount == 0) ? "(Empty)" : "";
    return (
        <div className="flex flex-1 flex-col items-center gap-2 p-4">
            <h2 className="text-xl font-bold">{applesCount} Apples</h2>
            <h3 className="text-lg">{basketName} {basketState}</h3>
        </div>
    );
}



export default Basket;