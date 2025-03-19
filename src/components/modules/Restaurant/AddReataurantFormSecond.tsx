"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

const AddReataurantFormSecond = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <MyFormInput
              name="Restaurant-Close"
              label="Restaurant Open"
              placeholder="Write here"
            />
            <MyFormInput
              name="location"
              label="Restaurant Close"
              placeholder="Write here"
            />
            <MyFormInput
              name="price"
              label="Other Facilities"
              placeholder="Write here"
            />
          </div>

          <div>
            <MyFormInput name="payment" label="Coin" placeholder="Write here" />
            <MyFormInput
              name="about"
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
