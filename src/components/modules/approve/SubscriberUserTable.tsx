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
import { useGetAllInActiveSubscribersQuery } from "@/redux/features/subscriber/subscribers.api";
import { useUpdateUserStatusMutation } from "@/redux/features/user/user.api";
import { MdDone, MdOutlineClose } from "react-icons/md";
import { toast } from "sonner";

type TStatus = {
  id: string;
  data: { subscriptionStatus: string };
};

const SubscriberUserTable = () => {
  const { data, isFetching } = useGetAllInActiveSubscribersQuery(undefined);
  const [updateUser] = useUpdateUserStatusMutation();

  console.log(data?.data);

  const handleStatus = async (data: TStatus) => {
    const toastId = toast.loading("Updating...");

    try {
      const res: any = await updateUser(data);
      if (res.data) {
        toast.success("Updated Successfully", { id: toastId });
      } else {
        toast.error(res?.error?.data?.message || "Failed to Update", {
          id: toastId,
        });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to Update");
    }
  };

  if (isFetching) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (data?.data?.length < 1) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-lg text-primary">No Data Found</p>
      </div>
    );
  }
  return (
    <div className="bg-[#fff9f9] p-4 rounded-xl">
      <div className="flex gap-2 justify-between mb-3 items-center">
        <h3 className="md:text-2xl text-xl font-semibold">Subscriber User</h3>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="md:text-2xl text-xl font-medium text-black">
              User name
            </TableHead>
            <TableHead className="md:text-2xl text-xl font-medium text-black">
              E-mail
            </TableHead>
            <TableHead className="md:text-2xl text-xl font-medium text-black">
              Code
            </TableHead>
            <TableHead className="w-28 text-right md:text-2xl text-xl font-medium text-black">
              Approval
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell className="">{item.fullName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.subscriptionCode}</TableCell>
              <TableCell className="flex justify-between ">
                <button
                  onClick={() =>
                    handleStatus({
                      id: item.id,
                      data: { subscriptionStatus: "ACTIVE" },
                    })
                  }
                >
                  <MdDone className="text-2xl text-gray-700" />
                </button>
                <button
                  onClick={() =>
                    handleStatus({
                      id: item.id,
                      data: { subscriptionStatus: "REJECTED" },
                    })
                  }
                >
                  <MdOutlineClose className="text-2xl text-red-600" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SubscriberUserTable;
