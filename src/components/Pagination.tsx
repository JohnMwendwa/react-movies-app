import { useSearchMoviesContext } from "../contexts/searchMoviesContext";
import { usePagination, DOTS } from "../hooks/usePagination";

export default function Pagination() {
  const { currentPage, limit, totalCount, onPageChange } =
    useSearchMoviesContext();
  const paginationRange = usePagination({ totalCount, limit, currentPage })!;

  if (paginationRange?.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <nav className="text-center my-6 ">
      <ul className="flex justify-center">
        {currentPage > 1 && (
          <li onClick={onPrevious} className=" cursor-pointer">
            &lt;&lt; Prev
          </li>
        )}

        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li>&#8230;</li>;
          } else {
            return (
              <li onClick={() => onPageChange(pageNumber)}>{pageNumber}</li>
            );
          }
        })}

        {currentPage !== lastPage && (
          <li onClick={onNext} className="cursor-pointer">
            Next &gt;&gt;
          </li>
        )}
      </ul>
    </nav>
  );
}
