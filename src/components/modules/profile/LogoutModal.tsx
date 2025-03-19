"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

const LogoutModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white md:w-2/5 py-3 rounded-lg">
        Log Out
      </DialogTrigger>

      <DialogContent className="max-w-[450px] !rounded-3xl [&>button]:hidden py-10">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col justify-center items-center gap-5 text-center">
              <FaRegQuestionCircle className="text-[170px] text-primary" />
              <div className="space-y-2">
                <h3 className="md:text-4xl text-2xl font-medium">
                  Are You Sure?
                </h3>
                <p className="text-[#9CA4AB] md:text-2xl text-xl font-normal">
                  Do you want to log out ?
                </p>
              </div>
              <div className="flex md:gap-5 gap-3">
                <button
                  className="border border-primary text-primary py-3 px-6 rounded-lg font-normal"
                >
                  Log Out
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white py-3 px-6 rounded-lg font-normal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
