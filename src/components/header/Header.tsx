
import SearchBar from "../search-bar/SearchBar";

const Header = () => {

  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          Find your table for any occasion
        </h1>
        {/* SEARCH BAR */}
        <div className="text-left text-lg py-3 m-auto flex justify-center">
          <SearchBar />
        </div>
        {/* SEARCH BAR */}
      </div>
    </div>
  );
};

export default Header;
