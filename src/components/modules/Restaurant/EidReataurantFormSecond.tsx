/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DeleteModal from "@/components/common/DeleteModal";
import MyBtn from "@/components/common/MyBtn";
import Spinner from "@/components/common/Spinner";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  useGetRestaurantQuery,
  useUpdateRastaurantMutation,
} from "@/redux/features/restaurant/rastaurant.api";
import { selectRestaurant } from "@/redux/features/restaurant/rastaurantSlice";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "sonner";

const EidReataurantFormSecond = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetRestaurantQuery(id);
  const [getFacilities, setFacilities] = useState<string[]>([]);
  const firstpartData = useAppSelector(selectRestaurant);
  const [updateRestaurant] = useUpdateRastaurantMutation();

  const formFieldNames = ["openTime", "closeTime", "coins", "image"];

  const slicedData = Object.fromEntries(
    Object.entries(data?.data || {}).filter(([key]) =>
      formFieldNames.includes(key)
    )
  );

  useEffect(() => {
    if (data) {
      setFacilities(data?.data?.facilities || []);
    }
  }, [data]);

  const removeFacilities = (linkUrl: string) => {
    setFacilities((prevLinks) => {
      const updatedLinks = prevLinks.filter((link) => link !== linkUrl);
      return updatedLinks;
    });
  };

  const handleAddFacilities = (payload: FieldValues) => {
    if (payload.facilities) {
      setFacilities((prevLinks) => [...prevLinks, payload.facilities]);
    }
  };

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Updating...");

    const completedData = {
      ...firstpartData,
      ...data,
      facilities: getFacilities,
    };

    const formData = new FormData();

    if (data.image) {
      formData.append("image", data.image);
    }

    formData.append("data", JSON.stringify(completedData));

    console.log("inside formdata", Object.fromEntries(formData));

    const restaurentData = {
      id,
      data: formData,
    };

    try {
      const res: any = await updateRestaurant(restaurentData);
      if (res.data) {
        toast.success("Create Successfully", { id: toastId });
      } else {
        toast.error(res?.error?.data?.message || "Failed to Update", {
          id: toastId,
        });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to Update");
    }
  };

  if (isFetching) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-3">
        <div>
          <MyFormWrapper onSubmit={handleAddFacilities}>
            <div className="flex gap-1 justify-between mb-2">
              <h3 className="md:text-2xl text-xl font-semibold mb-1">
                Add Facilitie
              </h3>

              <button className="border border-primary px-5">Add</button>
            </div>
            <MyFormInput name="facilities" placeholder="Write here" />
          </MyFormWrapper>
        </div>

        <div>
          <h3 className="md:text-2xl text-xl font-semibold mb-1">Facilities</h3>
          <div className="flex gap-3 flex-wrap">
            {getFacilities?.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-2 justify-between bg-primary/10 py-1 px-2 1 border-b"
              >
                <p>{item}</p>
                <button onClick={() => removeFacilities(item)}>
                  <MdOutlineCancel className="text-2xl text-red-400" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MyFormWrapper onSubmit={handleSubmit} defaultValues={slicedData}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <MyFormInput
              name="openTime"
              label="Restaurant Open"
              placeholder="Write here"
            />
            <MyFormInput
              name="closeTime"
              label="Restaurant Close"
              placeholder="Write here"
            />
          </div>

          <div>
            <MyFormInput name="coins" label="Coin" placeholder="Write here" />
            <MyFormInput
              name="image"
              label="Add Photo"
              required={false}
              type="file"
              placeholder="Write here"
            />

            <Image
              src={data?.data?.image || ""}
              alt="image"
              height={80}
              width={150}
            />
          </div>
        </div>
        <div>
          <div className="w-full flex justify-center md:mt-8 mt-5 ">
            <Link href={`/restaurant/edit/${id}`} className="md:w-2/5">
              <button type="button" className="gradient-border w-full">
                <div className="content">Back</div>
              </button>
            </Link>
          </div>

          <div className="flex justify-center mt-4">
            <MyBtn name="Done" width="md:w-2/5" />
          </div>

          <div className="flex justify-center mt-4">
            <DeleteModal id={id as string} type="restaurent" btn="btn"/>
          </div>
        </div>
      </MyFormWrapper>
    </div>
  );
};

export default EidReataurantFormSecond;
