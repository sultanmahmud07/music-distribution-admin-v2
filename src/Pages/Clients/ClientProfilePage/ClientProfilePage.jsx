import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import AcceptMunic from "../../Inspections/AcceptMusic/AcceptMusic";
import { useParams } from "react-router-dom";
import axios from "axios";
import BASEURL from "../../../../Constants";
import { useQuery } from "@tanstack/react-query";

const ClientProfilePage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { id } = useParams();
  const {
    data: profileData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const response = await axios.get(
        `${BASEURL}/admin/user-inspection/${id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return response.data;
    },
  });

  const allSong = profileData?.data?.allSong;

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  if(isLoading){
    return <p>Loading..</p>
  }
  console.log(profileData);
  return (
    <div className="bg-[#F8FAFC] shadow-md rounded-md mt-2">
      {/* Top side manu  */}
      <div className=" bg-white px-5 pt-5 rounded-t-md">
        <div className="top-section flex justify-between items-center my-1">
          <h3 className="text-2xl uppercase font-bold">inspection</h3>
        </div>
        <div className=" flex items-center pt-2">
          <button
            className={`px-12 py-4 text-sm flex items-center justify-center gap-2  ${
              activeTab === 1
                ? " text-[#199332] tab_step_bg font-bold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => handleTabChange(1)}
          >
            <span className="text-xl">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>Overview</span>
          </button>
          <button
            className={`px-12 py-4 text-sm flex items-center justify-center gap-2  ${
              activeTab === 2
                ? " text-[#199332] tab_step_bg font-bold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => handleTabChange(2)}
          >
            <span className="text-xl">
              <AiOutlineIssuesClose />
            </span>
            <span>Assets </span>
          </button>
        </div>
      </div>
      <div className="p-5 shadow-md">
        {activeTab === 1 && <ProfileDetails userId={id}></ProfileDetails>}
        {activeTab === 2 && (
          <AcceptMunic allSong={allSong} isLoading={isLoading}></AcceptMunic>
        )}
      </div>
    </div>
  );
};

export default ClientProfilePage;
