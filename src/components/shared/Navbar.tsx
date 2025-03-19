"use client";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center md:mb-7 mb-4">
      <div className="">
        <Image src={logo} height={80} width={150} alt="logo" />
      </div>

      <div>
        <div className="flex gap-8">
          <Link href={"/approve"}>
            <button className="px-14 py-4 bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white rounded-lg">
              Approve
            </button>
          </Link>
          <Link href={"/core10"}>
            <button className="px-14 py-4 bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white rounded-lg">
              Core 10
            </button>
          </Link>

          <Link href={"/profile"}>
            <div className="border  border-primary rounded-lg">
              <div className="flex gap-3 px-5 py-2">
                <FaRegUserCircle className="text-4xl" />
                <div className="">
                  <p className="text-sm">Arik Lee</p>
                  <p className="font-medium text-sm">Admin</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
