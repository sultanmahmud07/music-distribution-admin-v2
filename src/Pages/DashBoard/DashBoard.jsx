import BulkUpload from "./BulkUpload/BulkUpload";
import RecentReleasesOverview from "./RecentReleaseOverview/RecentReleasesOverview";

const DashBoard = () => {
  return (
    <div className="shadow-md mt-2">
      <h2 className="text-2xl font-bold text-black uppercase bg-white p-3 rounded-t-md mb-56">
        Overview
      </h2>
      <BulkUpload />
      <RecentReleasesOverview></RecentReleasesOverview>
    </div>
  );
};

export default DashBoard;
