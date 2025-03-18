import RestaurantsTable from "@/components/modules/home/RestaurantsTable";
import Navbar from "@/components/shared/Navbar";

const CommonLayoutHomePage = () => {
  return (
    <div >
      <Navbar />

      <RestaurantsTable />
    </div>
  );
};

export default CommonLayoutHomePage;
