import SearchIcon from "../assets/images/SearchIcon";

export default function SearchBar({ setSearchName }) {
    return (
        <div className="inline-flex items-center gap-3 rounded-md px-3 py-2 text-primary shadow-light-blur">
            <SearchIcon className="h-4 w-4 fill-current" />
            <input type="text" className="bg-inherit outline-none" placeholder="Search for a country..." onChange={(event) => {
                setSearchName(event.target.value.toLowerCase());
            }} />
        </div>
    );
}