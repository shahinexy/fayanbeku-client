/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateMediaMutation } from "@/redux/features/user/user.api";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface DeleteModalProps {
  id: string;
}

const ReceiptsApproveModal = ({ id }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const [updateUser] = useUpdateMediaMutation(undefined);

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Updating...");

    const coins = parseInt(data.coins, 10);

    if (isNaN(coins) || coins <= 0) {
      toast.error("Please enter a valid number.", {
        id: toastId,
      });
      return;
    }

    const modifedData = {
      coins,
      status: "APPROVED",
    };
    const modifiedData = {
      id,
      data: modifedData,
    };

    try {
      const res: any = await updateUser(modifiedData);
      if (res.data) {
        toast.success("Create Successfully", { id: toastId });
      } else {
        toast.error(res?.error?.data?.message || "Failed to Update", {
          id: toastId,
        });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to Update");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="px-24 py-3 bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white w-full rounded-lg">
        Approve
      </DialogTrigger>

      <DialogContent className="max-w-[800px] !rounded-xl [&>button]:hidden bg-[#192B39CC] border-0">
        <DialogHeader>
          <DialogTitle className="text-white">
            <div className="p-20 ">
              <MyFormWrapper onSubmit={handleSubmit} className="w-full">
                <MyFormInput
                  name="coins"
                  label="Coin"
                  className="bg-transparent text-white"
                  inputClassName="!bg-transparent"
                />

                <div className="mt-7 ">
                  <MyBtn name="Done" width="w-full" />
                </div>
              </MyFormWrapper>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiptsApproveModal;
