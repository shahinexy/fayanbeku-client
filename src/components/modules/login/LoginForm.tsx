"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

const LoginForm = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit}>
        <MyFormInput
          name="email"
          label="Email"
          placeholder="Enter Your Email"
        />
        <MyFormInput
          name="password"
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          inputClassName="border border-gray-300"
        />

        <Link href={"/forget-password"}>
          <button className="text-primary mb-5">Forget password?</button>
        </Link>

        <MyBtn name="Log In" width="w-full" />
      </MyFormWrapper>
    </div>
  );
};

export default LoginForm;
