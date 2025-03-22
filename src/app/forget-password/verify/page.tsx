import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import phone from "../../../../public/images/demophone.png";
import VerifyOtpForm from "@/components/modules/auth/varifyOtp";

const VerifyOtpPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto h-screen px-5 pt-6 grid md:grid-cols-2 md:gap-28 gap-7 ">
      <div className="">
        <Image src={logo} alt="logo" width={200} height={100} />

        <div className="md:my-8 my-5 space-y-3">
          <h1 className="md:text-3xl text-xl md:font-bold font-semibold">
            Forgot Password
          </h1>
          <p className="text-[#A59F92]">Recover your account password</p>
        </div>

        <VerifyOtpForm />
      </div>

      <div className=" flex items-end ">
        <Image src={phone} alt="phone" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default VerifyOtpPage;
