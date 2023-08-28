"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSearchButtonClick = () => {
    if (location === "") return;
    router.push(`/search?city=${location}`);
    setLocation("");
  };

  return (
    <>
      <input
        value={location}
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        onChange={handleSearch}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={handleSearchButtonClick}
      >
        {"Let's go"}
      </button>
    </>
  );
};

export default SearchBar;
