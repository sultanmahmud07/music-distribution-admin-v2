import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { AiOutlineIssuesClose } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import BASEURL from "../../../../Constants";
import Loader from "../../Shared/Loader/Loader";
import EditSongDetails from "./EtidSong";
import SongTrack from "./SongTrack";

const NewInspectManage = () => {
  const { id } = useParams();
  const [isRejecting, setIsRejecting] = useState(false);
  const [reason, setReason] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showEdit, setShowEdit] = useState(false); // State to manage showing edit mode

  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();
  const {
    data: singleSongData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["singleSongData"],
    queryFn: async () => {
      const response = await axios.get(
        `${BASEURL}/admin/song-inspection/${id}`,
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

  const handleApproved = async () => {
    const response = await axios.patch(
      `${BASEURL}/admin/approved/${id}`,
      {},
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    if (response?.data?.statusCode === 200) {
      toast.success("Song Approved");
      navigate("/inspection");
    }
    return response.data;
  };

  const handleReject = () => {
    setIsRejecting(!isRejecting);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleOptionSelect = (e) => {
    const options = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedOptions(options);
  };

  const handleSubmitReject = async () => {
    const response = await axios.patch(
      `${BASEURL}/admin/reject/${id}`,
      { note: reason },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    if (response?.data?.statusCode === 200) {
      toast.success("Song Rejected");
      navigate("/inspection");
    }
    return response.data;
  };

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  const {
    user,
    status,
    trackType,
    isRelease,
    instrumental,
    secondaryTrackType,
    parentalAdvisory,
    releaseTitle,
    subtitle,
    line,
    primaryArtist,
    writer,
    composer,
    musicDirector,
    producer,
    actor,
    filmDirector,
    genre,
    upcEan,
    subGenre,
    producerCatalogNumber,
    productionYear,
    label,
    publisher,
    youtubeUrl,
    isrc,
    catalogNumber,
    tiktokStartInSecond,
    trackLanguage,
    releaseDate,
    isAdvancePurchase,
    advancePurchaseDate,
    correctionNote,
    createdAt,
    releaseId,
    labelName,
  } = singleSongData?.data;

  console.log(singleSongData?.data);
  return (
    <div className="shadow-md p-5 rounded-md bg-white my-4">
      <h2 className="text-2xl font-bold text-black text-center my-4 uppercase">
        Inspection
      </h2>
      <div className="ins_details grid grid-cols-10 gap-4">
        <div className="col-span-4">
          <div className="l">
            <img
              className="w-full rounded shadow"
              src={
                singleSongData?.data?.image
                  ? singleSongData?.data?.image
                  : "https://img.freepik.com/premium-photo/music-background-with-heart-notes_476363-3388.jpg"
              }
              alt="Song Image"
            />
          </div>
          <div className="bg-[#F8FAFC] p-2">
            <h3 className="text-xl font-bold capitalize my-2">
              {singleSongData?.data?.releaseTitle}
            </h3>
            <p className="font-semibold text-sm text-green-500">
              Release Data: {singleSongData?.data?.createdAt}
            </p>
            <div className="flex items-center gap-3 my-2">
              <img
                className="w-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8cTn1-RRcQ_T4-cf40vYi4sjFEADIdog1TqwvXO3kw&s"
                alt=""
              />
              <Link
                to={`/client/${user}`}
                className="text-sm font-semibold capitalize"
              >
                User Name
              </Link>
            </div>
          </div>
          <div className="bg-[#F8FAFC] p-2 flex flex-col gap-2 text-sm capitalize font-semibold">
            <p className="flex items-center gap-2">
              <span className="w-1/3">Release Type </span>
              <span className="w-8/12">: {trackType}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1/3">Release Id </span>
              <span className="w-8/12">: {releaseId}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1/3">Production Year </span>
              <span className="w-8/12">: {productionYear}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1/3">UPC </span>
              <span className="w-8/12">: {upcEan}</span>
            </p>
          </div>
          <div className="bottom_item my-4">
        <div className="grid grid-cols-2 ">
          <button className="btn w-full btn-sm bg-green-500 hover:bg-green-600 transaction rounded shadow text-white" onClick={handleApproved}>
            Approve
          </button>
          <button className="btn w-full btn-sm bg-red-500 hover:bg-red-600 transaction rounded shadow text-white" onClick={handleReject}>
            {isRejecting ? "Cancel" : "Reject"}
          </button>
        </div>
        {isRejecting && (
          <div className="flex flex-col gap-2 bg-gray-300 p-2 shadow">
            <select
              multiple
              value={selectedOptions}
              onChange={handleOptionSelect}
              className="select select-success w-full border-2 border-green-600"
              // style={{ minWidth: "200px", height: "120px" }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            
            <input
              type="text"
              placeholder="Reason for rejection"
              value={reason}
              onChange={handleReasonChange}
              className="border-b-2  p-2 input input-success"
            />
            <button className="btn w-full btn-sm bg-red-500 hover:bg-red-600 transaction rounded shadow text-white" onClick={handleSubmitReject}>
              REJECT
            </button>
          </div>
        )}
      </div>
        </div>
        <div className="col-span-6">
          <div className="bg-[#F8FAFC] rounded-t-md">
            {/* Top side manu  */}
            <div className="">
              <div className="grid grid-cols-3 w-full pt-2 px-3">
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
                  <span>Details</span>
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
                <button
                  className={`px-8 py-4 text-sm flex items-center justify-center gap-2  ${
                    activeTab === 3
                      ? " text-[#199332] tab_step_bg font-bold"
                      : "text-gray-500 font-semibold"
                  }`}
                  onClick={() => handleTabChange(3)}
                >
                  <span className="text-xl">
                    <AiOutlineIssuesClose />
                  </span>
                  {/* <span>Localizations</span> */}
                  <span>Edit Track</span>
                </button>
              </div>
            </div>
            <div className="p-3">
              {activeTab === 1 && (
                <div className="bg-white p-2 rounded pb-5 text-sm">
                  <div className="grid grid-cols-2 gap-3 view-release-main">
                    <p>
                      <span className="font-bold">Primary Track Type:</span>{" "}
                      {trackType}
                    </p>
                    <p>
                      <span className="font-bold">Is Release:</span> {isRelease}
                    </p>
                    <p>
                      <span className="font-bold">Instrumental:</span>{" "}
                      {instrumental}
                    </p>
                    <p>
                      <span className="font-bold">Secondary Track Type: </span>{" "}
                      {secondaryTrackType}
                    </p>
                    <p>
                      <span className="font-bold">Parental advisory: </span>{" "}
                      {parentalAdvisory}
                    </p>
                    <p>
                      <span className="font-bold">Sub Title: </span> {subtitle}
                    </p>
                    <p>
                      <span className="font-bold">Line-1: </span> {line}
                    </p>
                    <p>
                      <span className="font-bold">Line-2: </span> {line}
                    </p>
                    <p>
                      <span className="font-bold">Primary Artist: </span>
                      {primaryArtist?.map((item, index) => (
                        <span key={index}>{item?.primaryArtistName}</span>
                      ))}
                    </p>

                    <p>
                      <span className="font-bold">Writer: </span>
                      {writer?.map((item, index) => (
                        <span key={index}>{item?.writerName}</span>
                      ))}
                    </p>

                    <p>
                      <span className="font-bold">Composer: </span>
                      {composer?.map((item, index) => (
                        <span key={index}>{item.composerName}</span>
                      ))}
                    </p>

                    <p>
                      <span className="font-bold">Music Derector: </span>
                      {musicDirector?.map((item, index) => (
                        <span key={index}>{item.musicDirectorName}</span>
                      ))}
                    </p>
                    <p>
                      <span className="font-bold">Producer: </span>{" "}
                      {producer?.map((item, index) => (
                        <span key={index}>{item.producerName}</span>
                      ))}
                    </p>
                    <p>
                      <span className="font-bold">Genre:</span> {genre}
                    </p>
                    <p>
                      <span className="font-bold">SubGenre:</span> {subGenre}
                    </p>
                    <p>
                      <span className="font-bold">Producer Catalogue :</span>{" "}
                      {producerCatalogNumber}
                    </p>
                    <p>
                      <span className="font-bold">Label Name:</span> {labelName}
                    </p>
                    <p>
                      <span className="font-bold">Publisher:</span> {publisher}
                    </p>
                    <p>
                      <span className="font-bold">Track Language:</span>{" "}
                      {trackLanguage}
                    </p>
                    <p>
                      <span className="font-bold">ISRC:</span> {isrc}
                    </p>
                    {/* <p>
                      <span className="font-bold">
                        Tiktok preview start in seconds:
                      </span>{" "}
                      {tiktokStartInSecond}
                    </p> */}
                  </div>
                </div>
              )}
              {activeTab === 2 && (
             <SongTrack
             refetch={refetch}
             setActiveTab={setActiveTab}
             singleSongData={singleSongData?.data}
             ></SongTrack>
              )}
              {activeTab === 3 && (
                <div className="bg-white p-2 rounded">
                  <EditSongDetails
                    setActiveTab={setActiveTab}
                    singleSongData={singleSongData?.data}
                  ></EditSongDetails>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default NewInspectManage;
