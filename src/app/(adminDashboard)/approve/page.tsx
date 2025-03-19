import SubscriberUserTable from "@/components/modules/approve/SubscriberUserTable";
import Navbar from "@/components/shared/Navbar";

const ApprovePage = () => {
  return (
    <div>
      <Navbar />
      <div className="md:w-3/5">
        <SubscriberUserTable />
      </div>
    </div>
  );
};

export default ApprovePage;
