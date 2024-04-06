import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLayersOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="bg-[#F8FAFC] shadow-md rounded-md">
        {/* Top side manu  */}
        <div className="my-2 bg-white px-5 pt-5 rounded-t-md">
          <h3 className="text-2xl uppercase font-bold">My Profile</h3>
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
              <span>Claim Release</span>
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
              <span>Artist Channel Request</span>
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
              <span>Whitelist Request</span>
            </button>
          </div>
        </div>
        <div className="">
          {activeTab === 1 && (
            <p>component design hare</p>
            
          )}
          {activeTab === 2 && (
            <p>component design hare</p>
          )}
          {activeTab === 3 && (
             <p>component design hare</p>
          )}
        </div>
      </div>
  );
};

export default MyProfile;
