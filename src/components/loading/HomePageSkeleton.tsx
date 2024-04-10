import React from "react";

function HomePageSkeleton() {
  return (
    <>
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,_240px)] place-content-center ">
        {Array.from({ length: 20 }).map((_, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="w-[240px] h-[360px] mx-auto bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-4 w-40 bg-gray-400 rounded-lg mt-2 animate-pulse" />
            <div className="h-4 w-10 bg-orange-600 rounded-lg mt-2 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Pagination --small screen */}
      <div className="sm:hidden flex gap-3 mt-10 w-full justify-center items-center">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={idx}
            className="h-8 w-10 bg-orange-500 rounded-sm animate-pulse mt-4"
          />
        ))}
      </div>

      {/* Pagination --large screen */}
      <div className="hidden sm:flex gap-3 mt-10 w-full justify-center items-center">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className="h-8 w-10 bg-orange-500 rounded-sm animate-pulse mt-4"
          />
        ))}
      </div>
    </>
  );
}

export default HomePageSkeleton;
