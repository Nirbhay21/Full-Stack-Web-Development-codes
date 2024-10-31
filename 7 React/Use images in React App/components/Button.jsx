const Button = ({ imgUrl, title, clickHandler }) => {
    return (
        <div className="flex-1 text-center">
            <button className="w-16 rounded-md border-2 border-gray-400 bg-gray-300 px-4 py-2 hover:border-gray-600 active:bg-gray-200" title={title} onClick={clickHandler}>
                <img src={imgUrl} alt="arrow_image" />
            </button>
        </div>
    );
}

export default Button;