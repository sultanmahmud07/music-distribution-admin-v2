import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import musicImg from "../../../assets/clients/music-cover.png";
import { Link } from "react-router-dom";

const RecentReleasesOverview = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
  ];
  return (
    <div className="my-5 bg-white p-5 rounded-md shadow-md">
      <h4 className="text-black font-bold  mb-4">Latest Releases</h4>
      <div className="grid grid-cols-5 gap-5">
        {data.map((item, i) => {
          return (
            <div key={i} className=" font-semibold text-black relative">
              <div className="dropdown dropdown-bottom dropdown-end absolute top-3 text-white left-2">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 font-bold text-xl"
                >
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
                    <a>Inspect</a>
                  </li>
                  <li className="flex hover:bg-green-100 text-[#36C893] items-center gap-2 cursor-pointer p-2 ">
                    <span>
                      <MdOutlineRemoveRedEye />
                    </span>
                    <a>View Release</a>
                  </li>
                  <Link to={"/client/423232"}>
                    <li className="flex hover:bg-green-100 text-[#F38B2A] items-center gap-2 cursor-pointer p-2 ">
                      <span>
                        <FaUserCheck />
                      </span>
                      <a>Go To Client Page</a>
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="w-full rounded-xl">
                <img
                  className="w-full rounded-xl"
                  src={musicImg}
                  alt="music-img"
                />
              </div>
              <p>Breath me</p>
              <p className="text-xs flex items-center gap-1 text-gray-400">
                <span>
                  <FaRegDotCircle />
                </span>
                <span>Sia</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentReleasesOverview;
