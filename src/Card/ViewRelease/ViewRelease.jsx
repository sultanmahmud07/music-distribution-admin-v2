import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BASEURL from "../../../Constants";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useRouteError } from 'react-router-dom';

const ViewRelease = () => {
  const { id } = useParams();
  const [isRejecting, setIsRejecting] = useState(false);
  const [reason, setReason] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
  const {
    data: singleSongData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["singleSongData"],
    queryFn: async () => {
      const response = await axios.get(`${BASEURL}/admin/song-inspection/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
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
      navigate("/inspection")
    }
    return response.data;
  };
  const handleReject = () => {
    setIsRejecting(!isRejecting); // Toggle isRejecting state
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
    console.log("Reason for rejection:", reason);
    console.log("Selected options:", selectedOptions);
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
      navigate("/inspection")
    }
    return response.data;
    // Handle reject submission here
  };
 
  if (isLoading) {
    return <p>Loading....</p>;
  }
  console.log(singleSongData);
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">View Release</h1>
      <h1 className="text-3xl font-bold mb-6 text-blue-600">{singleSongData?.data?.releaseTitle}</h1>
      <div className="flex gap-4">
        <button className="btn bg-purple-500" onClick={handleApproved}>
          Approve
        </button>
        <button className="btn bg-red-500" onClick={handleReject}>
          {isRejecting ? "Cancel" : "Reject"} {/* Toggle button text */}
        </button>
      </div>
      {isRejecting && (
        <div className="mt-8">
          <input
            type="text"
            placeholder="Reason for rejection"
            value={reason}
            onChange={handleReasonChange}
            className="border-b-2 border-purple-500 p-2 mr-4 mb-4"
          />
          <select
            multiple
            value={selectedOptions}
            onChange={handleOptionSelect}
            className="border-b-2 border-purple-500 p-2 mr-4 rounded-md"
            style={{ minWidth: "200px", height: "120px" }}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button className="btn bg-red-500" onClick={handleSubmitReject}>
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewRelease;
