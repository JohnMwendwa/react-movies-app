import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../App";

import { MovieDetailsProps } from "../pages/MovieDetailsPage";
import DownloadBtn from "./DownloadBtn";
import Modal from "./Modal";
import { useSearchMoviesContext } from "../contexts/searchMoviesContext";

export default function MovieDetails(props: MovieDetailsProps) {
  const [openModal, setOpenModal] = useState(false);
  const { movies, query, setQuery } = useSearchMoviesContext();
  const navigate = useNavigate();

  const closeModal = () => setOpenModal(false);
  return (
    <div className="mb-4 relative md:static">
      <div className="md:hidden">
        <h1 className="font-extrabold text-3xl mb- ">{props.title_english}</h1>
        <p className="text-lg font-medium text-gray-500">{props.year}</p>
        <div className="text-lg mb-4 font-medium text-gray-500">
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
      </div>
      <div className="flex ">
        <img
          src={props.medium_cover_image}
          alt={props.slug}
          width={210}
          height={315}
          loading="lazy"
          className="rounded-md object-cover w-[210px] h-[auto] bg-gray-500 border-2 border-black"
        />

        <div className="ml-4 md:ml-8">
          <div className="md:block hidden">
            <h1 className="font-extrabold text-5xl mb-4 ">
              {props.title_english}
            </h1>
            <p className="text-lg font-medium text-gray-500">{props.year}</p>
            <div className="text-lg mb-4 font-medium text-gray-500">
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
          </div>
          <div>
            <span className="md:text-xl text-lg">Available in : </span>
            {props.torrents?.map((t, idx) => (
              <span key={t.hash}>
                <span
                  className="rounded-md border border-gray-400 px-2 md:px-4 py-1 md:mr-2 font-medium hover:text-green-400 hover:border-gray-900 duration-300 ease-in-out md:inline-block mt-2 hidden"
                  title={`Download ${props.title_long} ${t.quality} Torrent`}
                >
                  <a href={t.url}>
                    {t.quality} <span className="uppercase">{t.type}</span>
                  </a>
                </span>
                <DownloadBtn className="text-base bg-transparent border text-black border-black rounded-none py-1 md:hidden">
                  <a href={t.url}>{t.quality}</a>
                </DownloadBtn>
              </span>
            ))}
          </div>

          <DownloadBtn
            onClick={() => setOpenModal(true)}
            className="hidden md:flex"
          >
            Download
          </DownloadBtn>

          {openModal && (
            <Modal openModal={openModal} closeModal={closeModal}>
              <h2 className="font-bold text-center text-green-600 text-xl mb-4">
                Select Movie Quality
              </h2>

              <div className="flex justify-center">
                {props.torrents.map((t, idx) => {
                  return (
                    <div
                      key={t.hash}
                      className={`${
                        idx < props.torrents.length - 1 ? "border-r-2" : ""
                      } p-4 text-center`}
                    >
                      <p className="uppercase font-bold mb-4 text-xl">
                        {t.type}
                      </p>
                      <p className="text-gray-400 text-lg">File Size</p>
                      <p className="font-bold text-xl mt-2">{t.size}</p>
                      <DownloadBtn
                        onClick={closeModal}
                        className="text-lg"
                        title={`Download ${props.title_long} ${t.quality} Torrent`}
                      >
                        <a href={t.url}>Download</a>
                      </DownloadBtn>
                    </div>
                  );
                })}
              </div>
            </Modal>
          )}
        </div>
      </div>
      <div className="hidden sm:block mt-4 w-full">
        {props.yt_trailer_code && (
          <div>
            <iframe
              className="bg-gray-400"
              width={516}
              height={315}
              src={`https://www.youtube.com/embed/${props.yt_trailer_code}`}
              title={`${props.title_english} youtube trailer`}
              aria-label={`${props.title_english} youtube trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <h3 className="font-bold text-2xl mt-4 ">Plot Summary</h3>
      <p className="text-lg text-gray-600">{props.description_full}</p>

      {query.length !== 0 && movies.length !== 0 && (
        <div className="bg-gray-300/20 w-[300px] overflow-hidden overflow-y-auto max-h-[200px] md:max-h-96 shadow-md hide flex flex-col gap-2 px-1 absolute -top-6 md:top-16 -right-4 md:right-0 z-10 backdrop-blur-sm">
          {movies.slice(0, 15).map((movie) => (
            <Link
              to={`${BASE_URL}movies/${movie.slug}`}
              onClick={() => setQuery("")}
            >
              <div
                key={movie.id}
                className="grid grid-cols-[50px_1fr]  border-b-2"
              >
                <div>
                  <img
                    src={movie.medium_cover_image}
                    alt={movie.slug}
                    width={50}
                    height={50}
                    loading="lazy"
                    className="rounded-md object-cover bg-gray-500 border-2"
                  />
                </div>
                <div className="ml-2 mt-2">
                  <h2 className="font-bold text- leading-4 mb-1">
                    {movie.title_english}
                  </h2>
                  <p className="text-sm">{movie.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-4">
        <button
          className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
}
