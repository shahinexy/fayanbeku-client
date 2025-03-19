/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

interface DeleteModalProps {
  id: string;
  type: "restaurent" | "user";
}

const DeleteModal = ({ id, type }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const toastId = toast.loading(`Deleting...`);
    // try {
    //   let res;
    //   if (type === "restaurent") {
    //     res = await deleteRestaurent(id).unwrap();
    //   } else if (type === "user") {
    //     // res = await deleteCause(id).unwrap();
    //   } 

    //   if (res.data) {
    //     toast.success("Deleted Successfully", { id: toastId });
    //     setOpen(false);
    //   } else {
    //     toast.error(res?.error?.data?.message || "Failed to Delete", {
    //       id: toastId,
    //     });
    //     setOpen(false);
    //   }
    // } catch (err: any) {
    //   toast.error(err?.data?.message || `Failed to delete ${type}`, {
    //     id: toastId,
    //   });
    // }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="gradient-border md:w-2/5">
      <div className="content">Delete</div>
      </DialogTrigger>

      <DialogContent className="max-w-[450px] !rounded-3xl [&>button]:hidden">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col justify-center items-center gap-5 text-center">
              <h3 className="text-xl font-medium">
                Are you sure you want to proceed?
              </h3>
              <div className="flex md:gap-5 gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-red-500 py-2 px-6 rounded-full"
                >
                  Cancle
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-green-500 py-2 px-6 rounded-full"
                >
                  Confirm
                </button>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;