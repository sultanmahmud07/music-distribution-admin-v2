import { Link } from "react-router-dom";
import cover from "../../../../assets/clients/profile-cover.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BASEURL from "../../../../../Constants";
import { FaArrowRightLong } from "react-icons/fa6";
import RecentReleases from "./RecentReleases/RecentReleases";
import { formatDate } from "../../../../utils/utils";
const ProfileDetails = ({ userId }) => {
  // <<<<<<<<< Profile info Data Recived >>>>>>>>>>
  // user-inspection/:id

  const {
    data: profileData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const response = await axios.get(
        `${BASEURL}/admin/user-inspection/${userId}`,
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
  console.log(profileData);
  const userInfo = profileData?.data?.userInfo;
  const totalRelease = profileData?.data?.totalReleases;
  const latestRelease = profileData?.data?.latestRelease;
  const allSong = profileData?.data?.allSong;

  // if (isLoading) {
  //   return <Loader></Loader>
  // }
  if (isLoading) {
    return <p>Loading..</p>
  }
  return (
    <div className="bg-white rounded-md p-3 shadow">
      <div
        className="profile_cover_img relative w-full"
        // style={{
        //   backgroundImage: `url(${cover})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   width: "100%",
        //   height: "27vh",
        // }}
      >
        <img src={cover} className="w-full" alt="cover-image" />
        {/* cover img div  */}
        <div className="absolute bottom-[-28px] left-8">
          {/* <div className="text-2xl text-white absolute  profile_pic_edit_box"> <LuEdit></LuEdit></div> */}
          <div className="avatar-group -space-x-6">
            <div className="avatar shadow">
              <div className="w-28">
                {/* <img className="bg-white" src={profileData?.data[0]?.image} alt="profile-img" /> */}
                <img
                  className="bg-white"
                  src={
                    userInfo?.image
                      ? userInfo?.image
                      : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3Dhttps://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg"
                  }
                  alt="profile-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-2 pt-8">
        <div className="col-span-4">
          <h2 className="text-xl font-bold ">{"Sultan Mahmud"}</h2>
          <p className="font-semibold">{profileData?.data?.userInfo?.email}</p>
          <span className="text-sm text-gray-500">Dhaka, Bangladesh</span>
        </div>
        <div className="col-span-6">
          <div className=" profile_item_bg p-2 px-6 rounded-xl shadow-md grid grid-cols-3 gap-7 pt-5">
            <div className="font-semibold flex flex-col gap-0 border-r-2 border-white">
              <span className="text-[#94A3B8] text-xs pt-3">
                Number of Releases
              </span>
              <span className="text-white font-bold text-xl">
                {profileData?.data?.totalReleases}
              </span>
              <p className="text-green-400 text-xs flex items-center gap-2">
                <span>See Releases</span>
                <span>
                  <FaArrowRightLong />
                </span>
              </p>
            </div>
            <div className="font-semibold flex flex-col gap-0 border-r-2 border-white">
              <span className="text-[#94A3B8] text-xs pt-3">
                Number of Releases
              </span>
              <span className="text-white font-bold text-xl">
                {totalRelease}
              </span>
              <p className="text-green-400 text-xs flex items-center gap-2">
                <span>See Tracks</span>
                <span>
                  <FaArrowRightLong />
                </span>
              </p>
            </div>
            <div className="font-semibold flex flex-col gap-0 ">
              <span className="text-[#94A3B8] text-xs pt-3">Created On</span>
              <span className="text-white font-bold text-sm mt-2">
                {formatDate(userInfo?.createdAt)}
              </span>
              {/* <p className="text-green-400 text-xs flex items-center gap-2">
                <span>See Releases</span>
                <span><FaArrowRightLong /></span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <RecentReleases
        latestRelease={profileData?.data?.latestRelease}
        allSong={profileData?.data?.allSong}
      ></RecentReleases>
    </div>
  );
};
export default ProfileDetails;
