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
import { useGetAllUserQuery } from "@/redux/features/user/user.api";
import Link from "next/link";
import { FiEye } from "react-icons/fi";

const UserTable = () => {
  const { data, isFetching } = useGetAllUserQuery(undefined);
 
  if (isFetching) {
    return <div><Spinner/></div>;
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
          {data?.data?.data?.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.coins}</TableCell>
              <TableCell className="text-center">
                <Link href={"/receipts"}>
                  <button>
                    <FiEye className="text-lg text-gray-700" />
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
