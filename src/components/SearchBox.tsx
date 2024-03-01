import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBox = async(
  { placeholder, width }
    : {
      placeholder: string;
      width: string;
    }
) => {

  return (
    <form className={`relative flex ${width} items-center gap-3 rounded-full border-2 border-orange-300 bg-white pt-0 ring-orange-400 ring-offset-1 focus-within:ring-2 lg:rounded-r-full`}>
      {/* <div className=""> */}

      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
      type="search"
        className="pointer-events-auto w-full rounded-s-full py-2 pl-3 text-sm placeholder:text-gray-500 focus:outline-none md:py-3 md:text-sm lg:py-4 lg:text-base"
        placeholder={placeholder}
      // onChange={(e) => {
      //   handleSearch(e.target.value);
      // }}
      // defaultValue={searchParams.get('query')?.toString()}
      />

      {/* ------------------------------- SEARCH ICON ------------------------------ */}
      <button
        type="submit"
        className="relative z-[2] mr-2 h-fit w-auto cursor-pointer rounded-full border border-blue-700 bg-blue-700 p-2 text-sm font-medium text-white ring-offset-1 hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300"
      >
        <FaMagnifyingGlass className="cursor-pointer" />
      </button>
    </form>
  );
};

export default SearchBox;
