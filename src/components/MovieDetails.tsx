import { useState } from "react";

import { MovieDetailsProps } from "../pages/MovieDetailsPage";
import DownloadBtn from "./DownloadBtn";
import Modal from "./Modal";

export default function MovieDetails(props: MovieDetailsProps) {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);
  return (
    <div className="my-4">
      <div className="flex ">
        <img
          src={props.medium_cover_image}
          alt={props.slug}
          width={210}
          height={315}
          className="rounded-md object-cover w-[210px] h-[auto] bg-gray-500 border-2 border-black"
        />

        <div className="ml-8">
          <h1 className="font-extrabold text-5xl mb-4">
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

          <div>
            <span className="text-xl">Available in : </span>
            {props.torrents?.map((t, idx) => (
              <span
                key={idx}
                className="rounded-md border border-gray-400 px-4 py-1 mr-2 font-medium hover:text-green-400 hover:border-gray-900 duration-300 ease-in-out"
                title={`Download ${props.title_long} ${t.quality} Torrent`}
              >
                <a href={t.url}>
                  {t.quality} <span className="uppercase">{t.type}</span>
                </a>
              </span>
            ))}
          </div>

          <DownloadBtn onClick={() => setOpenModal(true)}>Download</DownloadBtn>

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
          />
        </div>
      </div>
      <h3 className="font-bold text-2xl mt-4 ">Plot Summary</h3>
      <p className="text-lg text-gray-600">{props.description_full}</p>
    </div>
  );
}
