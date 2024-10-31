const Basket = ({applesCount, basketName}) => {
    return (
        <div className="flex flex-1 flex-col items-center gap-2 p-4">
            <h2 className="text-xl font-bold">{applesCount} Apples</h2>
            <h3 className="text-lg">{basketName}</h3>
        </div>
    );
}

export default Basket;