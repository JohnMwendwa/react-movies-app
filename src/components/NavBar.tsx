import React from "react";
import SearchBar from "./SearchBar";

interface NavBarProps {
  openSearch: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({ openSearch, setOpenSearch }: NavBarProps) {
  return (
    <header
      className={`border-b bg-gray-100 py-2 md:mb-0 ${
        openSearch ? "mb-20" : ""
      }`}
    >
      <div className="flex justify-between items-center px-3 py-2 max-w-7xl mx-auto relative">
        <a
          href="/"
          className="text-4xl font-medium border-2 border-green-400 px-2 pb-1 rounded-md"
        >
          R<span className="font-extrabold text-green-400">O</span>
          <span className="font-extrabold text-orange-400">_</span>
          <span className="font-extrabold text-green-400">O</span>M
        </a>
        <div
          className="text-2xl mr-4 md:hidden"
          onClick={() => setOpenSearch((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-black h-7 w-7 cursor-pointer"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
        </div>
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>

      {/* Mobile and small screen search bar */}
      <div
        className={`flex justify-center py-4 absolute z-10 top-20 bg-gray-100 border-y left-0 right-0 ${
          openSearch ? "block" : "hidden"
        } md:hidden`}
      >
        <SearchBar />
      </div>
    </header>
  );
}
