/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { CiLocationOn, CiMail } from "react-icons/ci";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import MyFormInput from "@/components/form/MyFormInput";
import { FieldValues } from "react-hook-form";
import { useState } from "react";
import LogoutModal from "./LogoutModal";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import Spinner from "@/components/common/Spinner";
import { FaRegUserCircle } from "react-icons/fa";
import { toast } from "sonner";
import { useUpdateUserMutation } from "@/redux/features/user/user.api";

const ProfileDetails = () => {
  const [editing, setEditing] = useState<boolean>(false);
  const { data, isFetching } = useGetMeQuery(undefined);
  const [updateUser] = useUpdateUserMutation();

  const userData = data?.data;

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Updating...");

    const formData = new FormData();

    if (data.profileImage) {
      formData.append("image", data.profileImage);
    }

    formData.append("data", JSON.stringify(data));

    // console.log("inside formdata", Object.fromEntries(formData));

    try {
      const res: any = await updateUser(formData);
      if (res.data) {
        toast.success("Updated Successfully", { id: toastId });
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
      <h3 className="md:text-2xl text-xl font-semibold mb-6">
        {editing ? "Edit profile" : "My profile"}
      </h3>
      <div
        className={`${
          editing
            ? "hidden"
            : "bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white py-3 px-6 flex justify-between mb-6 rounded-lg items-center"
        }`}
      >
        <div className="flex gap-3 items-center">
          {userData?.profileImage ? (
            <Image
              src={userData?.profileImage}
              alt="profile"
              width={70}
              height={70}
              className="h-[60px] w-[60px] rounded-full"
            />
          ) : (
            <FaRegUserCircle className="text-[60px]" />
          )}

          <div>
            <h3 className="md:text-2xl text-xl font-medium">
              {userData?.fullName}
            </h3>
            <p className="text-xl">{userData?.role}</p>
          </div>
        </div>

        <div className="">
          <div className="flex gap-2 items-center md:text-xl">
            <CiLocationOn className="text-2xl" /> {userData?.address}
          </div>
          <div className="flex gap-2 items-center md:text-xl">
            <CiMail className="text-2xl" /> {userData?.email}
          </div>
        </div>

        <div className="">
          <button
            onClick={() => setEditing(true)}
            className="bg-white px-8  py-2 text-black rounded-lg"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="">
        <h3 className="md:text-2xl text-xl font-semibold mb-4">
          Personal Information
        </h3>

        <MyFormWrapper onSubmit={handleSubmit} defaultValues={userData}>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div>
              <p className="md:text-xl mb-1">Full Name</p>
              <MyFormInput
                name="fullName"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div>
              <p className="md:text-xl mb-1">Your Email</p>
              <MyFormInput
                name="email"
                type="email"
                disabled
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div>
              <div>
                <p className="md:text-xl mb-1">Your Phonr Number</p>
                <MyFormInput
                  name="phone"
                  disabled={!editing}
                  inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <p className="md:text-xl mb-1">Address</p>
              <MyFormInput
                name="address"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>

            <div className="">
              <p className="md:text-xl mb-1">Profile Picture</p>
              {userData?.profileImage && !editing ? (
                <div className="flex justify-center bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] p-2 rounded-lg">
                  <Image
                    src={userData?.profileImage}
                    alt="profile"
                    width={300}
                    height={150}
                    className="h-[150px] w-[300px] rounded-full"
                  />
                </div>
              ) : (
                <div>
                  <MyFormInput
                    name="profileImage"
                    type="file"
                    disabled={!editing}
                    inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>

          <div
            className={`${
              !editing
                ? "hidden"
                : "w-full flex justify-center mt-5 md:mt-8 gap-5"
            } `}
          >
            <button className="bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white md:w-2/5 py-3 rounded-lg">
              Save
            </button>
            <button
              type="button"
              className=" md:w-2/5 rounded-lg gradient-border"
            >
              <div onClick={() => setEditing(false)} className="content">
                Cancel
              </div>
            </button>
          </div>
        </MyFormWrapper>
      </div>

      <div
        className={`${
          editing ? "hidden" : "w-full flex justify-center mt-5 md:mt-8 gap-5"
        } `}
      >
        <LogoutModal />
      </div>
    </div>
  );
};

export default ProfileDetails;
