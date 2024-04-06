import { useState } from "react";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Relase from "./Relase";
import Tracks from "./Tracks";


const InspectDetailsTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="bg-[#F8FAFC] shadow-md rounded-md">
      {/* Top side manu  */}
      <div className="my-2 bg-white px-5 pt-5 rounded-t-md">
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
            <IoMdCheckmarkCircleOutline />
            </span>
            <span>Release</span>
          </button>
          <button
            className={`px-8 py-4 text-sm flex items-center justify-center gap-2  ${
              activeTab === 2
                ? " text-[#199332] tab_step_bg font-bold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => handleTabChange(2)}
          >
            <span className="text-xl">
            <AiOutlineIssuesClose />
            </span>
            <span>Tracks</span>
          </button>
        </div>
      </div>
      <div className="p-5 shadow-md">
        {activeTab === 1 && <Relase></Relase>}
        {activeTab === 2 && <Tracks></Tracks>}
      </div>
    </div>
  );
};

export default InspectDetailsTab;
