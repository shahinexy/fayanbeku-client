"use client";
import Image from "next/image";
import logo from "../../../../public/images/demophone.png";
import { CiLocationOn, CiMail } from "react-icons/ci";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import MyFormInput from "@/components/form/MyFormInput";
import { FieldValues } from "react-hook-form";
import { useState } from "react";

const ProfileDetails = () => {
  const [editing, setEditing] = useState<boolean>(false);
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <h3 className="md:text-2xl text-xl font-semibold mb-6">{editing ? 'Edit profile' : 'My profile'}</h3>
      <div
        className={`${
          editing
            ? "hidden"
            : "bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white py-3 px-6 flex justify-between mb-6 rounded-lg items-center"
        }`}
      >
        <div className="flex gap-3 items-center">
          <Image
            src={logo}
            alt="profile"
            width={70}
            height={70}
            className="h-[60px] w-[60px] rounded-full"
          />
          <div className="">
            <h3 className="md:text-2xl text-xl font-medium">Johan Smith</h3>
            <p className="text-xl">Anarose manager</p>
          </div>
        </div>

        <div className="">
          <div className="flex gap-2 items-center md:text-xl">
            <CiLocationOn className="text-2xl" /> 27 Oak Street, Manchester
          </div>
          <div className="flex gap-2 items-center md:text-xl">
            <CiMail className="text-2xl" /> adojs@maildrop.com
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

        <MyFormWrapper onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div>
              <p className="md:text-xl mb-1">First Name</p>
              <MyFormInput
                name="name"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div>
              <p className="md:text-xl mb-1">Last Name</p>
              <MyFormInput
                name="name"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div>
              <p className="md:text-xl mb-1">Your Email</p>
              <MyFormInput
                name="name"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div>
              <p className="md:text-xl mb-1">Your Phonr Number</p>
              <MyFormInput
                name="name"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <p className="md:text-xl mb-1">Profile Picture</p>
              <MyFormInput
                name="name"
                type="file"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            {/* //border  */}
            <div className="md:col-span-3 md:text-2xl text-xl font-semibold border-t pt-5">
              Address
            </div>

            <div>
              <p className="md:text-xl mb-1">Country</p>
              <MyFormInput
                name="name"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div>
              <p className="md:text-xl mb-1">City</p>
              <MyFormInput
                name="name"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div>
              <p className="md:text-xl mb-1">State</p>
              <MyFormInput
                name="name"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div>
              <p className="md:text-xl mb-1">Area</p>
              <MyFormInput
                name="name"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div>
              <p className="md:text-xl mb-1">Address</p>
              <MyFormInput
                name="name"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
            </div>
            <div>
              <p className="md:text-xl mb-1">Apt no</p>
              <MyFormInput
                name="name"
                disabled={!editing}
                inputClassName="!bg-gradient-to-t from-[#fce3ca] to-[#f8d0d3] !border-0 !rounded-lg"
              />
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
        <button className="bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white md:w-2/5 py-3 rounded-lg">
          Log out
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
