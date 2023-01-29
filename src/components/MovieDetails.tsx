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
        </div>
      </div>
      <h3 className="font-bold text-2xl mt-4 ">Plot Summary</h3>
      <p className="text-xl text-gray-600">{props.description_full}</p>
    </div>
  );
}
