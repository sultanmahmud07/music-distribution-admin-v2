import React, { useContext, useState } from "react";
import { MdOutlineSkipNext } from "react-icons/md";
import { RiSkipBackMiniLine } from "react-icons/ri";
import { AuthContext } from "../../../context/AuthProvider";
import BASEURL from "../../../../Constants";

import { CirclesWithBar } from "react-loader-spinner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ShowEditRelease = ({ setActiveTab, singleSongData }) => {
  const { uploadInfo, setUploadInfo } = useContext(AuthContext);

  const handleSubmitUpload = (e) => {
    e.preventDefault();
    const release_title = e.target.release_title.value;
    const subtitle = e.target.subtitle.value;
    const line_1 = e.target.line_1.value;
    const line_2 = e.target.line_2.value;
    const upc_ean = e.target.upc_ean.value;
    const isrc = e.target.isrc.value;

    const data = {
      release_title,
      subtitle,
      line_1,
      line_2,
      upc_ean,
      isrc,
    };
    setUploadInfo(data);
    setActiveTab(3);
  };
  const id = localStorage.getItem("user_id");


  const { releaseTitle, subtitle, line, upcEan, isrc } = singleSongData?.data;

  return (
    <form
      className="bg-white w-full rounded-md p-4"
      onSubmit={handleSubmitUpload}
    >
      <h4 className="font-semibold text-xl capitalize my-3 ">
        Please Edit this information
      </h4>
      <div className="check_box_s grid grid-cols-2 gap-5 mt-3">

      </div>
      <div className="input_fild grid grid-cols-2 gap-3 mt-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              Release Title <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            required
            type="text"
            name="release_title"
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
            defaultValue={releaseTitle}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Subtitle </span>
          </label>
          <input
            required
            type="text"
            name="subtitle"
            placeholder="version/subtitle"
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
            defaultValue={subtitle}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              C Line <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            required
            type="text"
            name="line_1"
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
            defaultValue={line}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              P Line <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            required
            type="text"
            placeholder="Taranga Electro Centre"
            name="line_2"
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
            defaultValue={line}
          />
        </div>
      </div>

      {/* buttom input here  ================*/}
      <div className="input_fild grid grid-cols-2 gap-3 mt-3">

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              UPC/EAN (optional){" "}
            </span>
          </label>
          <input
            defaultValue={upcEan}
            required
            type="text"
            name="upc_ean"
            placeholder="UPC/EAN"
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
             <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">ISRC *</span>
          </label>
          <input
            defaultValue={isrc}
            required
            type="text"
            placeholder="IN-S7A-RC-26-00145"
            name="isrc"
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
       
      </div>
      <div className="button_box flex items-center justify-between p-2 mt-8">

        <div className="relative m-auto">
          <input
            // onClick={() => handleTabChange(3)}
            type="submit"
            value={"Update"}
            className="btn btn-sm pr-9 btn-outline btn-success flex items-center gap-1 z-20"
          ></input>
          <span className="text-xl absolute top-2 right-2 text-success z-10">
            <MdOutlineSkipNext />
          </span>
        </div>
      </div>
    </form>
  );
};

export default ShowEditRelease;
