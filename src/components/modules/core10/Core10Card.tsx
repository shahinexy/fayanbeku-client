/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import { useCoreRestaurentQuery } from "@/redux/features/restaurant/rastaurant.api";
import DeleteModal from "@/components/common/DeleteModal";

const Core10Card = () => {
  const { data } = useCoreRestaurentQuery(undefined);

  console.log(data?.data);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
      {data?.data?.map((item: any) => (
        <div key={item.id} className="bg-[#FAE7B5] rounded-md">
          <div className="relative rounded-md overflow-hidden">
            <Image
              src={item.image}
              alt="Restaurant"
              width={1000}
              height={1000}
              className="w-full h-28"
            />

            <div className="absolute top-2 right-2 flex justify-end inset-0 gap-2">
              <Link href={`/restaurant/edit/${item.id}`}>
                <button className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
                  <FiEdit className="text-xl" />
                </button>
              </Link>

                <DeleteModal id={item.id} type="restaurent" btn="icon"/> 

            </div>
          </div>

          <div className="p-3 space-y-1">
            <h3 className="font-semibold truncate ">{item.name}</h3>
            <p className="font-medium text-sm">About</p>

            <p className="text-sm line-clamp-2">{item.about}</p>
            <div className="flex justify-end">
              <button className="text-primary">See more</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Core10Card;
