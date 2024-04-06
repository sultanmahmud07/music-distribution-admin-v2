import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AcceptMunic from "./AcceptMusic/AcceptMusic";
import FailedMusic from "./FailedMusic/FailedMusic";
import Inspection from "../Distributions/Inspection/Inspection";
import FailedInspection from "../Distributions/FailedInspection/FailedInspection";

const Inspections = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="bg-[#F8FAFC] shadow-md rounded-md">
      {/* Top side manu  */}
      <div className="my-2 bg-white px-5 pt-5 rounded-t-md">
        <div className="top-section flex justify-between items-center my-3">
          <h3 className="text-2xl uppercase font-bold">inspection</h3>
        </div>
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
            <span>To Inspect</span>
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
            <span>Failed Inspection</span>
          </button>
        </div>
      </div>
      <div className="p-5 shadow-md">
        {activeTab === 1 && <Inspection></Inspection>}
        {activeTab === 2 && <FailedInspection></FailedInspection>}
      </div>
    </div>
  );
};

export default Inspections;
