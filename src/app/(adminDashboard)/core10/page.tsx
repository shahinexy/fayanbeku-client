import MyLogo from "@/components/common/MyLogo";
import Core10Card from "@/components/modules/core10/Core10Card";
import Link from "next/link";
import React from "react";

const Core10Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <MyLogo />

        <div className="inline-block">
          <Link href={"/restaurant/add"}>
            <button
              className="bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white px-12 py-3 rounded-lg
          "
            >
              Add core 10
            </button>
          </Link>
        </div>
      </div>

      <Core10Card />
    </div>
  );
};

export default Core10Page;
