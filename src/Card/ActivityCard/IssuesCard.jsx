import React from "react";
import { HiDotsVertical } from "react-icons/hi";

const IssuesCard = ({ music }) => {
  if (!music) {
    return <p>Loading</p>;
  }
  return (
    <div className="top_title bg-white p-2 items-center grid grid-cols-8 rounded-sm text-sm shadow">
      <div className="col-span-2 flex items-center gap-2">
        <img
          className="w-10"
          src="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-love-song-icon-png-image_2036603.jpg"
          alt="img"
        />
        <span>{music?.releaseTitle}</span>
      </div>
      <div className="col-span-6 grid grid-cols-5">
        <span className="">{music?.releaseId ? music?.releaseId : "N/A"}</span>
        <span className="">
          <span className="">
            {music?.primaryArtist?.map((artist, index) => (
              <React.Fragment key={index}>
                {artist?.primaryArtistName}
                <br />
              </React.Fragment>
            ))}
          </span>
        </span>
        <span className="">{music?.labelName}</span>
        <span className="">{music?.upcEan}</span>
        <div className="flex items-center justify-between gap-1">
          <span className="">{music?.releaseDate}</span>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="m-1 font-bold text-xl">
              <HiDotsVertical />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuesCard;
