import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BASEURL from "../../../Constants";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ShowDetailsRelease from "./ShowDetailsRelease/ShowDetailsRelease";
import Loader from "../../Pages/Shared/Loader/Loader";

const ViewRelease = () => {
  const { id } = useParams();
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


  if (isLoading) {
    return <Loader></Loader>
  }

  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="text-3xl font-bold mb-6">View Release</h1>
      <ShowDetailsRelease singleSongData={singleSongData} />
    </div>
  );
};

export default ViewRelease;
