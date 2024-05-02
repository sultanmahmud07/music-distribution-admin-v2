import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const MusicCard = ({ song }) => {
  if (!song) {
    return;
  }
  const {
    audio,
    _id,
    image,
    user,
    status,
    trackType,
    isRelease,
    instrumental,
    secondaryTrackType,
    parentalAdvisory,
    releaseTitle,
    subtitle,
    line,
    primaryArtist,
    primaryArtistSpotifyId,
    primaryArtistAppleId,
    primaryArtistFacebookId,
    primaryArtistYoutubeId,
    writer,
    composer,
    musicDirector,
    producer,
    actor,
    filmDirector,
    genre,
    upcEan,
    subGenre,
    producerCatalogNumber,
    productionYear,
    labelName,
    labelId,
    publisher,
    youtubeUrl,
    isrc,
    catalogNumber,
    tiktokStartInSecond,
    trackLanguage,
    releaseDate,
    isAdvancePurchase,
    advancePurchaseDate,
    isApproved,
    correctionNote,
    tackDown,
    songStatus,
    createdAt,
  } = song;
console.log(song);
  return (
    <div className="top_title bg-white p-2 items-center grid grid-cols-8 rounded-sm text-sm shadow">
      <div className="col-span-2 flex items-center gap-2">
        <img
          className="w-10"
          src="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-love-song-icon-png-image_2036603.jpg"
          alt="img"
        />
        <span>{releaseTitle}</span>
      </div>
      <div className="col-span-6 grid grid-cols-5">
        <span className="">{song?.releaseId ? song?.releaseId : "N/A"}</span>
        <span className="">
          <span className="">
            {primaryArtist?.map((artist, index) => (
              <React.Fragment key={index}>
                {artist?.primaryArtistName}
                <br />
              </React.Fragment>
            ))}
          </span>
        </span>

        <span className="">{labelName}</span>
        <span className="">{upcEan}</span>
        <div className="flex items-center justify-between gap-1">
          <span className="">{releaseDate}</span>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="m-1 font-bold text-xl">
              <HiDotsVertical />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] flex flex-col p-2 shadow bg-white rounded w-52"
            >
              <li className="flex hover:bg-green-100 text-[#8774F9] items-center gap-2 cursor-pointer p-2 ">
                <span>
                  <LuPencil />
                </span>
                <Link to={`/inspection/${_id}`}>Inspect</Link>
              </li>
              <li className="flex hover:bg-green-100 text-[#36C893] items-center gap-2 cursor-pointer p-2 ">
                <span>
                  <MdOutlineRemoveRedEye />
                </span>
                <a>View Release</a>
              </li>
              <Link to={`/client/${_id}`}>
                <li className="flex hover:bg-green-100 text-[#F38B2A] items-center gap-2 cursor-pointer p-2 ">
                  <span>
                    <FaUserCheck />
                  </span>
                  <a>Go To Client Page</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
