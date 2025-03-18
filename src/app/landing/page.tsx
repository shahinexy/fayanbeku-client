import logo from "../../../public/images/logo.png";
import phone from "../../../public/images/demophone.png";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-[1280px] mx-auto h-screen px-5 pt-6 grid md:grid-cols-2 md:gap-28 gap-7 ">
      <div className="">
        <Image src={logo} alt="logo" width={200} height={100} />

        <div className="md:my-8 my-5 space-y-3">
          <h1 className="md:text-3xl text-xl md:font-bold font-semibold">
            Add / Remove New <span className="text-[#E97586]">Restaurants</span>{" "}
            & Handle <span className="text-[#FFD02D]">Rewards</span>
          </h1>
          <p className="text-[#A59F92]">
            Add new restaurants for app users to enjoy.
          </p>
        </div>

        <Link href={'/login'}>
        <button className="gradient-border w-full">
          <span className="content text-primary">Admin Log In</span>
        </button>
        </Link>
      </div>

      <div className=" flex items-end">
        <Image src={phone} alt="phone" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default page;
