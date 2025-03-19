'use client'
"@/components/ui/table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllRestaurantQuery } from "@/redux/features/restaurant/rastaurant.api";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";

const RestaurantsTable = () => {
  const { data, isFetching } = useGetAllRestaurantQuery(undefined);
console.log(data);
  if (isFetching) {
    return <p>Loadin...</p>;
  }

  return (
    <div className="bg-[#fff9f9] p-4 rounded-xl">
      <div className="flex gap-2 justify-between mb-3 items-center">
        <h3 className="md:text-2xl text-xl font-semibold">Restaurants</h3>
        <Link href={"/restaurant/add"}>
          <button className="px-8 py-2 bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white rounded-lg">
            + Add New
          </button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] md:text-2xl text-xl font-medium text-black">
              Name
            </TableHead>
            <TableHead className="md:text-2xl text-xl font-medium text-black">
              Location
            </TableHead>
            <TableHead className="md:text-2xl text-xl font-medium text-black">
              Coin
            </TableHead>
            <TableHead className="text-right md:text-2xl text-xl font-medium text-black">
              Edit
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-center">
              <Link href={"/restaurant/edit"}>
                <button>
                  <FiEdit className="text-lg text-gray-700" />
                </button>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default RestaurantsTable;
