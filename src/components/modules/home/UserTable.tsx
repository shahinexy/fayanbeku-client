/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Spinner from "@/components/common/Spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllMediaQuery } from "@/redux/features/user/user.api";
import Link from "next/link";
import { FiEye } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const UserTable = () => {
  const { data, isFetching } = useGetAllMediaQuery(undefined);

  if (isFetching) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <div className="bg-[#fff9f9] p-4 rounded-xl">
      <div className="flex gap-2 justify-between mb-3 items-center">
        <h3 className="md:text-2xl text-xl font-semibold">Users</h3>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" md:text-2xl text-xl font-medium text-black">
              Name
            </TableHead>
            <TableHead className="md:text-2xl text-xl font-medium text-black">
              Status
            </TableHead>
            <TableHead className="md:text-2xl text-xl font-medium text-black">
              Coin
            </TableHead>
            <TableHead className="text-right md:text-2xl text-xl font-medium text-black">
              Receipts
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((data: any) => (
            <TableRow key={data?.id}>
              <TableCell>{data?.user?.fullName}</TableCell>
              <TableCell>{data?.user?.coinStatus}</TableCell>
              <TableCell>{data?.user?.coins}</TableCell>
              <TableCell className=" flex justify-end gap-5">
                <Link href={`/receipts/${data?.id}`}>
                  <button>
                    <FiEye className="text-lg text-gray-700" />
                  </button>
                </Link>

                <div
                  className={`${data.status === "REJECTED" ? "" : "hidden"}`}
                >
                  <GoDotFill className="text-red-500 text-2xl" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
