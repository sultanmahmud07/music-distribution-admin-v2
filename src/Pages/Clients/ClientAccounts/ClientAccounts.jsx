import React from "react";
import ClientCard from "./ClientCard/ClientCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CirclesWithBar } from "react-loader-spinner";
import BASEURL from "../../../../Constants";

const ClientAccounts = () => {
 const id = localStorage.getItem("admin_id");

  // <<<<<<<<< Profile info Data Recived >>>>>>>>>>
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/admin/users`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        return response.data;
      } catch (error) {
        // setAuthenticated(error?.response?.data?.message);
        console.log("Respons:", error?.response?.data?.message);
        throw error;
      }
    },
  });
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );
  }
  // console.log(users);
  return (
    <div className="p-4 bg-white rounded-md shadow">
      <div className="ll">
        <div className="top_title bg-[#F8FAFC] p-2 py-4 grid grid-cols-10 rounded-sm text-sm font-semibold">
          <span className="col-span-4">NAME</span>
          <span className="col-span-2">CLIENT ID</span>
          <span className="col-span-2">CREATED ON</span>
          <span className="col-span-2 text-center">Action</span>
        </div>
        <div className="client_container flex flex-col gap-2 mt-2">
          {users?.data?.map((client, i) => {
            return <ClientCard key={i} client={client}></ClientCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientAccounts;
