import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrackCard = ({ track }) => {
  // console.log(track);
  return (
    <div className="top_title bg-white p-2 items-center grid grid-cols-8 rounded-sm text-sm shadow">
      <div className="col-span-2 flex items-center gap-2">
        <img
          className="w-10"
          src="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-love-song-icon-png-image_2036603.jpg"
          alt="img"
        />
        <span>{track?.releaseTitle}</span>
      </div>
      <div className="col-span-6 grid grid-cols-4">
        <span className="">{track?.releaseId ? track?.releaseId : "N/A"}</span>
        <span className="">
         {
           track?.primaryArtist[0]?._id  ?
          track?.primaryArtist?.map((artist, index) => (
            <React.Fragment key={index}>
              {artist?.primaryArtistName}
              <br />
            </React.Fragment>
          ))
          :
          track?.primaryArtistName
         }
        </span>
        <span className="">{track?.isrc}</span>
        <div className="flex items-center justify-between gap-1">
          {/* <span className="">{track?.upcEan}</span> */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="m-1 font-bold text-xl">
              <HiDotsVertical />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] flex flex-col p-2 shadow bg-white rounded w-52"
              >
                 <Link to={`/inspection/${track?._id}`}>
                <li className="flex hover:bg-green-100 text-[#8774F9] items-center gap-2 cursor-pointer p-2 ">
                  <span>
                    <LuPencil />
                  </span>
                  <a>Inspect</a>
                </li>
                </Link>
                <Link to={`/view-release/${track?._id}`}>
                <li className="flex hover:bg-green-100 text-[#36C893] items-center gap-2 cursor-pointer p-2 ">
                  <span>
                    <MdOutlineRemoveRedEye />
                  </span>
                  <a>View Release</a>
                </li>
                </Link>
                <Link to={`/client/${track?.user?._id}`}>
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

export default TrackCard;
