import { Link } from "react-router-dom";
import { useSearchMoviesContext } from "../contexts/searchMoviesContext";
import { usePagination } from "../hooks/usePagination";

export default function Pagination() {
  const { currentPage, limit, totalCount } = useSearchMoviesContext();
  const paginationRange = usePagination({ totalCount, limit, currentPage })!;

  if (paginationRange?.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <nav className="text-center my-6 ">
      <ul className="flex justify-center">
        {currentPage > 1 && (
          <Link to={`/page/${currentPage - 1}`}>
            <li className="cursor-pointer px-2 py-1 border border-gray-600 mr-2">
              &lt;&lt; Prev
            </li>
          </Link>
        )}

        {paginationRange.map((pageNumber, idx) => {
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
                  className={`cursor-pointer px-2 py-1 border border-gray-600 mr-2 ${
                    currentPage === pageNumber &&
                    "bg-gray-400 text-white cursor-not-allowed"
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
