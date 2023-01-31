import { Movie } from "../contexts/searchMoviesContext";

export default function MovieDetails(props: Movie) {
  return (
    <div>
      <div className="flex ">
        <img
          src={props.medium_cover_image}
          alt={props.slug}
          width={210}
          height={315}
          className="rounded-md object-cover w-[210px] h-[auto] bg-gray-500 border-2 border-black"
        />

        <div className="ml-8">
          <h1 className="font-extrabold text-5xl">{props.title_english}</h1>
          <p>{props.year}</p>
          <div>
            {props.genres?.map((g, idx) => {
              return (
                <span key={idx} className="">
                  {g}
                  {props.genres.length > 0 && props.genres.length - 1 !== idx
                    ? " / "
                    : ""}
                </span>
              );
            })}
          </div>

          <div>
            <span className="text-xl">Available in : </span>
            {props.torrents?.map((t, idx) => (
              <span
                key={idx}
                className="rounded-md border px-4 py-1 mr-2 font-bold"
              >
                {t.quality}
              </span>
            ))}
          </div>
          <button className="px-4 py-2 text-white bg-green-500 font-bold text-2xl rounded-md mt-4 flex items-baseline">
            <svg
              viewBox="0 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 fill-gray-700"
            >
              <title />
              <g>
                <path d="M90,54a5.9966,5.9966,0,0,0-6,6V78H12V60A6,6,0,0,0,0,60V84a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V60A5.9966,5.9966,0,0,0,90,54Z" />
                <path d="M43.7578,64.2422a5.9979,5.9979,0,0,0,8.4844,0l18-18a5.9994,5.9994,0,0,0-8.4844-8.4844L54,45.5156V12a6,6,0,0,0-12,0V45.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844Z" />
              </g>
            </svg>
            Download
          </button>
        </div>
      </div>

      <h3 className="font-bold text-2xl mt-4 ">Plot Summary</h3>
      <p className="text-xl text-gray-600">{props.description_full}</p>
    </div>
  );
}
