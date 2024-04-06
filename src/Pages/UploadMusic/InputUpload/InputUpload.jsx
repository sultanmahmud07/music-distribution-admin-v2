import React from "react";
import { MdOutlineSkipNext } from "react-icons/md";
import { RiSkipBackMiniLine } from "react-icons/ri";
const InputUpload = ({ handleTabChange }) => {
  return (
    <div className="bg-white rounded-md p-4">
      <h4 className="font-semibold text-xl capitalize my-3 ">
        Please provide this information
      </h4>
      <span className="text-sm text-gray-400">Add data, entire albums.</span>
      <br></br>
      <span className="text-sm text-gray-400">
        include all of the information about the tune you've chosen.
      </span>
      {/* all radio button hare  */}
      <div className="check_box_s grid grid-cols-2 gap-5 mt-3">
        <div className="flex flex-col gap-3">
          <div className="items">
            <p className="text-sm font-semibold my-1">
              Primary Track Type <span className="text-red-500">*</span>
            </p>
            <div className="flex items-center flex-wrap gap-y-0 gap-2">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Music</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-success radio-xs"
                />
              </label>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Classical Music</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-success radio-xs"
                />
              </label>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Jazz Music</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-success radio-xs"
                />
              </label>
            </div>
          </div>
          <div className="items">
            <p className="text-sm font-semibold my-1">
              Instrumental <span className="text-red-500">*</span>
            </p>
            <div className="flex items-center flex-wrap gap-y-0 gap-2">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Yes</span>
                <input
                  type="radio"
                  name="radio-1"
                  className="radio radio-success radio-xs"
                />
              </label>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">NO</span>
                <input
                  type="radio"
                  name="radio-1"
                  className="radio radio-success radio-xs"
                />
              </label>
            </div>
          </div>
          <div className="items">
            <p className="text-sm font-semibold my-1">
              Parental advisory <span className="text-red-500">*</span>
            </p>
            <div className="flex items-center flex-wrap gap-y-0 gap-2">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Explict</span>
                <input
                  type="radio"
                  name="advisory"
                  className="radio radio-success radio-xs"
                />
              </label>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Not Explict</span>
                <input
                  type="radio"
                  name="advisory"
                  className="radio radio-success radio-xs"
                />
              </label>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Edited</span>
                <input
                  type="radio"
                  name="advisory"
                  className="radio radio-success radio-xs"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="items">
            <p className="text-sm font-semibold my-1">
              Is this track consider a key track for the release
              <span className="text-red-500">*</span>
            </p>
            <div className="flex items-center flex-wrap gap-y-0 gap-2">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Yes</span>
                <input
                  type="radio"
                  name="key"
                  className="radio radio-success radio-xs"
                />
              </label>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">No</span>
                <input
                  type="radio"
                  name="key"
                  className="radio radio-success radio-xs"
                />
              </label>
            </div>
          </div>
          <div className="items">
            <p className="text-sm font-semibold my-1">
              Secondary Track Type <span className="text-red-500">*</span>
            </p>
            <div className="flex items-center flex-wrap gap-y-0 gap-2">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Original</span>
                <input
                  type="radio"
                  name="original"
                  className="radio radio-success radio-xs"
                />
              </label>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Karaoke</span>
                <input
                  type="radio"
                  name="original"
                  className="radio radio-success radio-xs"
                />
              </label>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Medly</span>
                <input
                  type="radio"
                  name="original"
                  className="radio radio-success radio-xs"
                />
              </label>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Cover</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-success radio-xs"
                />
              </label>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Cover by cover band</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-success radio-xs"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="input_fild grid grid-cols-2 gap-3 mt-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              Release Title <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name=""
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Subtitle </span>
          </label>
          <input
            type="text"
            name=""
            placeholder="version/subtitle"
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              Line <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name=""
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              Line <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="Taranga Electro Centre"
            name=""
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
      </div>
      {/* buttom input here  ================*/}
      <div className="input_fild grid grid-cols-2 gap-3 mt-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Genre </span>
          </label>
          <select className="select select-sm  w-full rounded h-9 shadow bg-[#dddddd1e]">
            <option disabled selected>
              World
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              UPC/EAN (optional){" "}
            </span>
          </label>
          <input
            type="text"
            name=""
            placeholder="UPC/EAN"
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              SubGenre (optional){" "}
            </span>
          </label>
          <select className="select select-sm  w-full rounded h-9 shadow bg-[#dddddd1e]">
            <option disabled selected>
              Select SubGenre
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              Producer Catalouge number (optional)
            </span>
          </label>
          <input
            type="text"
            placeholder="TEEC3012"
            name=""
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Production year *</span>
          </label>
          <select className="select select-sm  w-full rounded h-9 shadow bg-[#dddddd1e]">
            <option disabled selected>
              2024
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Label Name *</span>
          </label>
          <select className="select select-sm  w-full rounded h-9 shadow bg-[#dddddd1e]">
            <option disabled selected>
              Select Label
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Publisher *</span>
          </label>
          <input
            type="text"
            placeholder="TarangaEC"
            name=""
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Track Language *</span>
          </label>
          <select className="select select-sm  w-full rounded h-9 shadow bg-[#dddddd1e]">
            <option disabled selected>
              Bengali
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">ISRC *</span>
          </label>
          <input
            type="text"
            placeholder="IN-S7A-RC-26-00145"
            name=""
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              Tiktok preview start in seconds
            </span>
          </label>
          <input
            type="text"
            placeholder="30"
            name=""
            className="input input-sm rounded h-9 shadow bg-[#dddddd1e]"
          />
        </div>
      </div>
      <div className="button_box flex items-center justify-between p-2 mt-8">
        <button
          onClick={() => handleTabChange(1)}
          type="button"
          className="btn btn-sm btn-outline btn-success flex items-center gap-1"
        >
          {" "}
          <span className="text-xl">
            <RiSkipBackMiniLine />{" "}
          </span>
          Back
        </button>
        <button
          onClick={() => handleTabChange(3)}
          type="button"
          className="btn btn-sm btn-outline btn-success flex items-center gap-1"
        >
          Next{" "}
          <span className="text-xl">
            <MdOutlineSkipNext />
          </span>
        </button>
      </div>
    </div>
  );
};

export default InputUpload;
