"@/components/ui/table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdDone, MdOutlineClose } from "react-icons/md";

const SubscriberUserTable = () => {
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
          <TableRow>
            <TableCell className="">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="flex justify-between ">
              <button>
                <MdDone className="text-2xl text-gray-700" />
              </button>
              <button>
                <MdOutlineClose className="text-2xl text-red-600" />
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SubscriberUserTable;
