import MyLogo from "@/components/common/MyLogo";
import Image from "next/image";
import receipts from "../../../../public/images/receipts.png";
import ReceiptsApproveModal from "@/components/modules/receipts/ReceiptsApproveModal";

const page = () => {
  return (
    <div>
      <MyLogo />
      <h1 className="md:text-3xl text-xl font-bold">Receipts</h1>

      <div className="max-w-[650px] mx-auto my-8">
        <div className="gradient-border w-full !p-0">
          <div className="content">
            <Image src={receipts} alt="Receipts" height={1000} width={1000} />
          </div>
        </div>

        <div className="md:mx-12 mx-5 mt-5 md:mt-12 space-y-5">
            <ReceiptsApproveModal id="" />
          <button className="gradient-border w-full">
            <div className="content text-primary">Cancel</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
