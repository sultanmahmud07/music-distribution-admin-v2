import React from "react";
import ToPayCard from "./ToPayCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BASEURL from "../../../../../Constants";

const ToPay = () => {
  const {
    data: getUserForPayment,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["getUserForPayment"],
    queryFn: async () => {
      const response = await axios.get(`${BASEURL}/admin/users-payment`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    },
  });
  // console.log(getUserForPayment);
  return (
    <div className="p-4 bg-white rounded-md shadow mt-3 mb-32">
      <div className="ll">
        <div className="top_title bg-[#F8FAFC] p-2 gap-3 py-4 grid grid-cols-8 rounded-sm text-sm font-semibold">
          <span className="col-span-2">PAY TO</span>
          <div className="col-span-6 grid grid-cols-4">
            <span className="">PAYEE ID</span>
            <span className="">USER ACCOUNT</span>
            {/* <span className="">BALANCED DUE</span> */}
            <span className="">PAYMENT AMOUNT</span>
            <span className="">PROCESS DATE</span>
          </div>
        </div>
        {getUserForPayment?.data?.allUsers.length > 0 ? (
          <div className="client_container flex flex-col gap-2 mt-2">
            {getUserForPayment?.data?.allUsers?.map((paymentData, i) => {
              return <ToPayCard key={i} paymentData={paymentData}></ToPayCard>;
            })}
          </div>
        ) : (
          <p className="text-center py-12">No Data found</p>
        )}
      </div>
    </div>
  );
};

export default ToPay;
