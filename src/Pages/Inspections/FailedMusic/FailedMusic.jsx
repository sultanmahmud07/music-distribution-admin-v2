import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BASEURL from "../../../../Constants";
import InspectionCard from "../../../Card/ActivityCard/InspectionCard";
import FailedInspectionCard from "../../../Card/ActivityCard/FailedInspectionCard";
const FailedMusic = () => {
  const {
    data: failedInspectionData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["failedInspectionData"],
    queryFn: async () => {
      const response = await axios.get(`${BASEURL}/admin/released-songs`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    },
  });
  console.log(failedInspectionData);
  return (
    <div className="p-4 bg-white rounded-md shadow">
      <div className="ll">
        <div className="top_title bg-[#F8FAFC] p-2 py-4 grid grid-cols-8 rounded-sm text-sm font-semibold">
          <span className="col-span-2">TITLE</span>
          <div className="col-span-6 grid grid-cols-5">
            <span className="">RELEASE ID</span>
            <span className="">ARTIST</span>
            <span className="">LABEL</span>
            <span className="">UPC</span>
            <span className="">RELEASE DATE</span>
          </div>
        </div>
        <div className="client_container flex flex-col gap-2 mt-2">
          {failedInspectionData?.data?.map((client, i) => {
            return (
              <FailedInspectionCard
                key={i}
                isLoading={isLoading}
                client={client}
              ></FailedInspectionCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FailedMusic;
