import { Link } from "react-router-dom";
import { useSearchMoviesContext } from "../contexts/searchMoviesContext";
import { usePagination } from "../hooks/usePagination";
import { useEffect, useState } from "react";

export default function Pagination() {
  const { currentPage, limit, totalCount } = useSearchMoviesContext();
  const paginationRange = usePagination({ totalCount, limit, currentPage })!;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (paginationRange?.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <nav className="text-center mt-10 ">
      <ul className="flex justify-center">
        {currentPage > 1 && (
          <Link to={`/page/${currentPage - 1}`}>
            <li className="cursor-pointer px-2 py-1 border border-gray-600 mr-2">
              &lt;&lt; Prev
            </li>
          </Link>
        )}

        {width > 768 &&
          paginationRange.map((pageNumber, idx) => {
            if (typeof pageNumber === "string") {
              return (
                <li key={idx} className="px-2 py-1 border border-gray-600 mr-2">
                  &#8230;
                </li>
              );
            } else {
              return (
                <Link key={idx} to={`/page/${pageNumber}`}>
                  <li
                    className={`cursor-pointer px-4 py-1 border border-gray-600 mr-2 ${
                      currentPage === pageNumber &&
                      "bg-orange-600 text-white cursor-not-allowed"
                    }`}
                  >
                    {pageNumber}
                  </li>
                </Link>
              );
            }
          })}

        {currentPage !== lastPage && (
          <Link to={`/page/${currentPage + 1}`}>
            <li className="cursor-pointer px-2 py-1 border border-gray-600 mr-2">
              Next &gt;&gt;
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
}
