"use client";
import MyLogo from "@/components/common/MyLogo";
import Image from "next/image";
import ReceiptsApproveModal from "@/components/modules/receipts/ReceiptsApproveModal";
import { useParams } from "next/navigation";
import { useGetmediaQuery } from "@/redux/features/user/user.api";
import Spinner from "@/components/common/Spinner";

const ReceiptsPage = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetmediaQuery(id);

  console.log(data?.data);
  const media = data?.data;

  if (isFetching) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <MyLogo />
      <h1 className="md:text-3xl text-xl font-bold">Receipts</h1>

      <div className="max-w-[650px] mx-auto my-8">
        <div className="gradient-border w-full !p-0">
          <div className="content">
            <Image
              src={media?.image}
              alt="Receipts"
              height={1000}
              width={1000}
              className=" h-[400px]"
            />
          </div>
        </div>

        <div className="md:mx-12 mx-5 mt-5 md:mt-12 space-y-5">
          <ReceiptsApproveModal id={media.id} />

          <button className="gradient-border w-full">
            <div className="content text-primary">Cancel</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptsPage;
