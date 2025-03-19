"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

const EditReataurantForm = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <MyFormInput
              name="name"
              label="Restaurant Name"
              placeholder="Write here"
            />
            <MyFormInput
              name="location"
              label="Location"
              placeholder="Write here"
            />
            <MyFormInput name="price" label="Price" placeholder="Write here" />
            <MyFormInput
              name="accessibilityInclusion"
              label="Accessibility & inclusion"
              placeholder="Write here"
            />
            <MyFormInput
              name="restaurantItems"
              label="Restaurant Items"
              placeholder="Write here"
            />
          </div>

          <div>
            <MyFormInput
              name="payment"
              label="Payments"
              placeholder="Write here"
            />
            <MyFormInput
              name="dressCode"
              label="Dress Code"
              placeholder="Write here"
            />
            <MyFormInput
              name="about"
              label="About"
              type="textarea"
              rows={10}
              placeholder="Write here"
            />
          </div>
        </div>
        <div>
          <Link
            href={"/restaurant/edit/next-part"}
            className="w-full flex justify-center md:mt-8 mt-5"
          >
            <MyBtn name="Next" width="md:w-2/5" />
          </Link>
        </div>
      </MyFormWrapper>
    </div>
  );
};

export default EditReataurantForm;
