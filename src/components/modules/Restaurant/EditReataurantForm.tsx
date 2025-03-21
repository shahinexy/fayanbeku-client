/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import MyBtn from "@/components/common/MyBtn";
import Spinner from "@/components/common/Spinner";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { useGetRestaurantQuery } from "@/redux/features/restaurant/rastaurant.api";
import {
  addRestaurantData,
  IRestaurant,
} from "@/redux/features/restaurant/rastaurantSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const EditReataurantForm = () => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { data, isFetching } = useGetRestaurantQuery(id);

  const {
    id: restaurantId,
    avgRating,
    openTime,
    closeTime,
    facilities,
    coins,
    image,
    status,
    reviews,
    coreTen,
    createdAt,
    updatedAt,
    ...restData
  } = data?.data || {};

  const handleSubmit = (data: FieldValues) => {
    console.log(data);

    const completedData = {...data, id: restaurantId}

    dispatch(addRestaurantData(completedData as IRestaurant));

    setIsAdded(true);
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
      <MyFormWrapper onSubmit={handleSubmit} defaultValues={restData}>
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
              href={`/restaurant/edit/next-part/${id}`}
              className="w-full flex justify-center md:mt-8 mt-5"
            >
              <MyBtn name="Next" width="md:w-2/5" />
            </Link>
          ) : (
            <div className="w-full flex justify-center md:mt-8 mt-5">
              <button className="md:w-2/5 text-primary border-2 border-primary py-3">Add</button>
            </div>
          )}
        </div>
      </MyFormWrapper>
    </div>
  );
};

export default EditReataurantForm;
