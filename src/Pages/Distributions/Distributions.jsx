import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLayersOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import Release from "../CatalogMusic/Release/Release";
import Inspection from "./Inspection/Inspection";
import FailedInspection from "./FailedInspection/FailedInspection";
import Processing from "./Proccessing/Proccessing";
import Issues from "./Issues/Issues";
import Distributed from "./Distributed/Distributed";
import TakenDown from "./TakenDown/TakenDown";

const Distributions = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="bg-[#F8FAFC] shadow-md rounded-md">
      {/* Top side manu  */}
      <div className="my-2 bg-white px-5 pt-5 rounded-t-md">
        <h3 className="text-2xl uppercase font-bold my-2">Activity</h3>
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
            <span>In Inspection (100)</span>
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
              <FaRegCircleUser />
            </span>
            <span>Failed Inspection</span>
          </button>
          <button
            className={`px-8 py-4 text-sm flex items-center justify-center gap-2  ${
              activeTab === 3
                ? " text-[#199332] tab_step_bg font-bold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => handleTabChange(3)}
          >
            <span className="text-xl">
              <IoMusicalNotesOutline />
            </span>
            <span>Processing</span>
          </button>
          {/* <button
            className={`px-8 py-4 text-sm flex items-center justify-center gap-2  ${
              activeTab === 4
                ? " text-[#199332] tab_step_bg font-bold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => handleTabChange(4)}
          >
            <span className="text-xl">
              <IoMusicalNotesOutline />
            </span>
            <span>Issues</span>
          </button> */}
          <button
            className={`px-8 py-4 text-sm flex items-center justify-center gap-2  ${
              activeTab === 5
                ? " text-[#199332] tab_step_bg font-bold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => handleTabChange(5)}
          >
            <span className="text-xl">
              <IoMusicalNotesOutline />
            </span>
            <span>Distributed</span>
          </button>
          <button
            className={`px-8 py-4 text-sm flex items-center justify-center gap-2  ${
              activeTab === 6
                ? " text-[#199332] tab_step_bg font-bold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => handleTabChange(6)}
          >
            <span className="text-xl">
              <IoMusicalNotesOutline />
            </span>
            <span>Taken Down</span>
          </button>
        </div>
      </div>
      <div className="p-3 shadow-md">
        {activeTab === 1 && <Inspection></Inspection>}
        {activeTab === 2 && <FailedInspection></FailedInspection>}
        {activeTab === 3 && <Processing></Processing>}
        {activeTab === 4 && <Issues></Issues>}
        {activeTab === 5 && <Distributed></Distributed>}
        {activeTab === 6 && <TakenDown></TakenDown>}
      </div>
    </div>
  );
};

export default Distributions;
