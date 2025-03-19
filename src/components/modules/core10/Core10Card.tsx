import Image from "next/image";
import restaurant from "../../../../public/images/restaurant.png";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";

const Core10Card = () => {
  const item = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
      {item.map((item, idx) => (
        <div key={idx} className="bg-[#FAE7B5] rounded-md">
          <div className="relative rounded-md overflow-hidden">
            <Image
              src={restaurant}
              alt="Restaurant"
              width={1000}
              height={1000}
              className="w-full h-28"
            />

            <div className="absolute top-2 right-2 flex justify-end inset-0 gap-2">
              <Link href={"/restaurant/edit"}>
                <button className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
                  <FiEdit className="text-xl" />
                </button>
              </Link>

              <button className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
                <RiDeleteBinLine className="text-xl text-red-500" />
              </button>
            </div>
          </div>

          <div className="p-3 space-y-1">
            <h3 className="font-semibold truncate ">
              Fency thai kabab Restaurants{" "}
            </h3>
            <p className="font-medium text-sm">About</p>

            <p className="text-sm line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              possimus accusamus quam unde facere error quis architecto quia
              reiciendis, temporibus porro nostrum nemo deleniti repudiandae
              enim? Nobis repudiandae dolores dolorem.
            </p>
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
