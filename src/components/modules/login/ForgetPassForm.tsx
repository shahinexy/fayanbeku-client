"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

const ForgetPassForm = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit}>
        <MyFormInput
          name="password"
          label="New Password"
          type="password"
          placeholder="Enter Your Password"
        />
        
        <MyFormInput
          name="password"
          label="Confirm Password"
          type="password"
          placeholder="Enter Your Password Again"
        />

        <Link href={"/forget-password"}>
          <button className="text-primary mb-5">Forget password?</button>
        </Link>

        <MyBtn name="Log In" width="w-full" />
      </MyFormWrapper>
    </div>
  );
};

export default ForgetPassForm;
