"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  addRestaurantData,
  IRestaurant,
  selectRestaurant,
} from "@/redux/features/restaurant/rastaurantSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const AddReataurantForm = () => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectRestaurant);

  const handleSubmit = (data: FieldValues) => {
    dispatch(addRestaurantData(data as IRestaurant));

    setIsAdded(true);
  };
  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit} defaultValues={data}>
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
              name="inclusion"
              label="Accessibility & inclusion"
              placeholder="Write here"
            />
            <MyFormInput
              name="items"
              label="Restaurant Items"
              placeholder="Write here"
            />
          </div>

          <div>
            <MyFormInput
              name="payments"
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
          {isAdded ? (
            <Link
              href={"/restaurant/add/next-part"}
              className="w-full flex justify-center md:mt-8 mt-5"
            >
              <MyBtn name="Next" width="md:w-2/5" />
            </Link>
          ) : (
            <div className="w-full flex justify-center md:mt-8 mt-5">
              <MyBtn name="Add" width="md:w-2/5" />
            </div>
          )}
        </div>
      </MyFormWrapper>
    </div>
  );
};

export default AddReataurantForm;
