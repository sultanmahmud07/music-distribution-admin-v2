import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLayersOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import ClientAccounts from "./ClientAccounts/ClientAccounts";

const ClientsManage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="bg-[#F8FAFC] shadow-md rounded-md">
      {/* Top side manu  */}
      <div className="my-2 bg-white px-5 pt-5 rounded-t-md">
        <div className="top-section flex justify-between items-center my-3">
          <h3 className="text-2xl uppercase font-bold">Clients Manage</h3>
          <div className="l">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
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
            <FaRegCircleUser />
            </span>
            <span>Client account</span>
          </button>
          {/* <button
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
          </button> */}
        </div>
      </div>
      <div className="p-5 shadow-md">
        {activeTab === 1 && <ClientAccounts></ClientAccounts>}
        {activeTab === 2 && <p>component design hare</p>}
        {activeTab === 3 && <p>component design hare</p>}
      </div>
    </div>
  );
};

export default ClientsManage;
