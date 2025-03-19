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
import { useState } from "react";
import { FieldValues } from "react-hook-form";

interface DeleteModalProps {
  id: string;
}

const ReceiptsApproveModal = ({ id }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (data: FieldValues) => {
    console.log(data);
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
                  name="coin"
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
