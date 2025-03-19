import RestaurantsTable from "@/components/modules/home/RestaurantsTable";
import UserTable from "@/components/modules/home/UserTable";
import Navbar from "@/components/shared/Navbar";

const CommonLayoutHomePage = () => {
  return (
    <div>
      <Navbar />

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-7 gap-5">
        <RestaurantsTable />
        <UserTable />
      </div>
    </div>
  );
};

export default CommonLayoutHomePage;
