import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLayersOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import RoyaltiseTopReporte from "./RevinewReporte/RevinewReporte";

const Royaltise = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="bg-[#F8FAFC] shadow-md rounded-md">
        {/* Top side manu  */}
        <div className="my-2 bg-white px-5 pt-5 rounded-t-md">
          <h3 className="text-2xl uppercase font-bold">ready to pay</h3>
          <div className=" flex items-center pt-2">
            <button
              className={`px-8 py-4 text-sm flex items-center justify-center gap-2  ${
                activeTab === 1
                  ? " text-[#199332] tab_step_bg font-bold"
                  : "text-gray-500 font-semibold"
              }`}
              onClick={() => handleTabChange(1)}
            >
              <span className="text-xl">
              <IoLayersOutline />
              </span>
              <span>All Reports</span>
            </button>
          </div>
        </div>
        <div className="p-4 shadow-md">
          {activeTab === 1 && (
            <RoyaltiseTopReporte></RoyaltiseTopReporte>
            
          )}
        </div>
      </div>
  );
};

export default Royaltise;
