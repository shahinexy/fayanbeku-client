import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

const MyLogo = () => {
  return (
    <div className="md:mb-7 mb-5">
      <Link href={"/"}>
        <Image src={logo} height={80} width={150} alt="logo" />
      </Link>
    </div>
  );
};

export default MyLogo;
