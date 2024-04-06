import React from "react";
import TrackCard from "./TrackCard";
import axios from "axios";
import BASEURL from "../../../../Constants";
import { useQuery } from "@tanstack/react-query";

const Track = () => {
  const {
    data: trackData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["trackData"],
    queryFn: async () => {
      const response = await axios.get(`${BASEURL}/admin/tracks`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    },
  });
  return (
    <div className="p-4 bg-white rounded-md shadow">
      <div className="ll">
        <div className="top_title bg-[#F8FAFC] p-2 py-4 grid grid-cols-8 rounded-sm text-sm font-semibold">
          <span className="col-span-2">TITLE</span>
          <div className="col-span-6 grid grid-cols-4">
            <span className="">TRACK ID</span>
            <span className="">ARTIST</span>
            <span className="">ISRC</span>
            <span className="">Action</span>
          </div>
        </div>
        <div className="client_container flex flex-col gap-2 mt-2">
          {trackData?.data?.map((track, i) => {
            return <TrackCard key={i} track={track}></TrackCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Track;
