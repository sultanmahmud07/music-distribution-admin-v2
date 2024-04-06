import React from "react";
import { MdOutlineSkipNext } from "react-icons/md";
import { RiSkipBackMiniLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DataChecking = ({ handleTabChange }) => {
  const navigate = useNavigate()
  const handleReleaseSong = () => {
    console.log("object");
    toast.success("Your Song Successfully Release")
    navigate('/my-upload')
  }
  return (
    <div>
     <div className="bg-white p-4 rounded-t">
     <h4 className="font-semibold text-xl capitalize my-3">
        Finally check your data
      </h4>
      <span className="text-sm text-gray-400">
        To make your release better, review our feedback and any mistakes or
        information that we have found.
      </span>
     </div>
     {/* 1st step  */}
      <div className="ll bg-white  p-4 rounded shadow">
        <h4 className="flex items-center my-3 text-lg gap-3 font-bold">
          Release Information{" "}
          <span onClick={() => handleTabChange(2)} className="cursor-pointer">
            <FaRegEdit />
          </span>
        </h4>
        <div className="item_box grid grid-cols-2 gap-4">
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Release Title *</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Genre *</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Version/Subtitle *</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Subgenre *</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Primary Artist *</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Line *</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Format *</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Line *</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">UPC/EAN*</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Production Year *</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Label Name*</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Song *</p>
            <p className="font-semibold text-sm">Rupa tumi valo theko</p>
          </div>
        </div>
      </div>
     {/* 2st step  */}
      <div className="ll bg-white  p-4 rounded shadow my-2">
        <h4 className="flex items-center my-3 text-lg gap-3 font-bold">
        Release Date & Times
          <span onClick={() => handleTabChange(3)} className="cursor-pointer">
            <FaRegEdit />
          </span>
        </h4>
        <div className="item_box grid grid-cols-2 gap-4 ">
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Release Date *</p>
            <p className="font-semibold text-sm">05-01-2024</p>
          </div>
          {/* item  */}
          <div className="item flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-400">Release Time *</p>
            <p className="font-semibold text-sm">1.00 AM</p>
          </div>
        </div>
      </div>




      <div className="button_box bg-white p-4  py-8 rounded flex items-center justify-between  pt-8">
        <button
          onClick={() => handleTabChange(3)}
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
          onClick={handleReleaseSong}
          type="button"
          className="btn btn-sm btn-outline btn-success flex items-center gap-1"
        >
         Release
          <span className="text-xl">
            <MdOutlineSkipNext />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DataChecking;
