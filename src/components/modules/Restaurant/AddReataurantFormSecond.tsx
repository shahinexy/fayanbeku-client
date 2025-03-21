/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { useCreateRastaurantMutation } from "@/redux/features/restaurant/rastaurant.api";
import { selectRestaurant } from "@/redux/features/restaurant/rastaurantSlice";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "sonner";

const AddReataurantFormSecond = () => {
  const searchParam = useSearchParams();
  const [getFacilities, setFacilities] = useState<string[]>([]);
  const firstpartData = useAppSelector(selectRestaurant);
  const [createRestuarent] = useCreateRastaurantMutation();

  // check if core 10
  const from = searchParam.get("from");
  console.log(from);

  // remove Facilities
  const removeFacilities = (linkUrl: string) => {
    setFacilities((prevLinks) => {
      const updatedLinks = prevLinks.filter((link) => link !== linkUrl);
      return updatedLinks;
    });
  };

  // add Facilities
  const handleAddFacilities = (payload: FieldValues) => {
    if (payload.facilities) {
      setFacilities((prevLinks) => [...prevLinks, payload.facilities]);
    }
  };

  // handle form
  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating...");

    let coreTen = false;

    if (from === "core10") {
      coreTen = true;
    }

    const completeData = {
      ...firstpartData,
      ...data,
      facilities: getFacilities,
      coreTen,
    };

    const formData = new FormData();

    formData.append("image", data.image);

    formData.append("data", JSON.stringify(completeData));

    try {
      const res: any = await createRestuarent(formData);
      if (res.data) {
        toast.success("Create Successfully", { id: toastId });
      } else {
        toast.error(res?.error?.data?.message || "Failed to Create", {
          id: toastId,
        });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to Create");
    }
  };
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

      <MyFormWrapper onSubmit={handleSubmit}>
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
            <MyFormInput name="payment" label="Coin" placeholder="Write here" />
            <MyFormInput
              name="image"
              label="Add Phoe"
              type="file"
              placeholder="Write here"
            />
          </div>
        </div>
        <div>
          <Link
            href={"/restaurant/add"}
            className="w-full flex justify-center md:mt-8 mt-5"
          >
            <button className="gradient-border md:w-2/5">
              <div className="content">Back</div>
            </button>
          </Link>

          <div className="flex justify-center mt-4">
            <MyBtn name="Done" width="md:w-2/5" />
          </div>
        </div>
      </MyFormWrapper>
    </div>
  );
};

export default AddReataurantFormSecond;
