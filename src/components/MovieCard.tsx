import { Link } from "react-router-dom";
import { Movie, useSearchMoviesContext } from "../contexts/searchMoviesContext";

const BASE_URL = "/";

export default function MovieCard(props: Movie) {
  const { setQuery } = useSearchMoviesContext();
  return (
    <Link to={`${BASE_URL}movies/${props.slug}`} onClick={() => setQuery("")}>
      <div className="w-[210px] mx-auto">
        <div className="relative group">
          <img
            src={props.medium_cover_image}
            alt={props.slug}
            width={210}
            height={315}
            loading="lazy"
            className="rounded-md object-cover w-[210px] h-[auto] bg-gray-500 border-2 border-black "
          />

          <div className="hidden absolute inset-0  group-hover:flex flex-col items-center justify-center text-white font-extrabold bg-gray-800/75 text-2xl ">
            <span aria-label="start icon" className="text-yellow-400 text-3xl">
              &#10032;
            </span>
            <div className="mb-4 text-3xl">{props.rating} / 10</div>

            {props.genres?.map((g, idx) => {
              return <p key={idx}>{g}</p>;
            })}

            <button className="bg-green-400 hover:bg-green-500 font-medium text-base px-3 py-1 rounded-sm mt-4">
              View Details
            </button>
          </div>
        </div>
        <h3 className="font-bold text-lg">{props.title_english}</h3>
        <p className="font-bold text-gray-600">{props.year}</p>
      </div>
    </Link>
  );
}
