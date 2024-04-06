import React from "react";
import LabelCard from "./LabelCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BASEURL from "../../../../Constants";

const Label = () => {
  const {
    data: labelData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["labelData"],
    queryFn: async () => {
      const response = await axios.get(`${BASEURL}/admin/labels`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    },
  });
  if (isLoading) {
    return <p>Loading....</p>;
  }
  console.log(labelData);
  return (
    <div className="p-4 bg-white rounded-md shadow">
      <div className="ll">
        <div className="top_title bg-[#F8FAFC] p-2 py-4 grid grid-cols-8 rounded-sm text-sm font-semibold">
          <span className="col-span-2">NAME</span>
          <div className="col-span-6 grid grid-cols-5">
            <span className="">Label ID</span>
            {/* <span className="">ARTIST</span>
          <span className="">LABEL</span>
          <span className="">UPC</span>
          <span className="">RELEASE DATE</span> */}
          </div>
        </div>
        {labelData?.data.length > 0 ? (
          <div className="client_container flex flex-col gap-2 mt-2">
            {labelData?.data?.map((label, i) => {
              return <LabelCard key={i} label={label}></LabelCard>;
            })}
          </div>
        ) : (
          <p className="text-center py-12">No Data found</p>
        )}
      </div>
    </div>
  );
};

export default Label;
