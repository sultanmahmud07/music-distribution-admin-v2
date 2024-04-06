import ReleaseCard from "./ReleaseCard";
import axios from "axios";
import BASEURL from "../../../../Constants";
import { useQuery } from "@tanstack/react-query";

const Release = () => {
  const {
    data: musicData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["musicData"],
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
  if (isLoading) {
    return <p>Loading....</p>;
  }
  console.log(musicData);
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
        {musicData?.data.length > 0 ? (
          <div className="client_container flex flex-col gap-2 mt-2">
            {musicData?.data?.map((music, i) => {
              return <ReleaseCard key={i} music={music}></ReleaseCard>;
            })}
          </div>
        ) : (
          <p className="text-center py-12">No Data found</p>
        )}
      </div>
    </div>
  );
};

export default Release;
