'use client'
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { FieldValues } from "react-hook-form";

const EmailSenderForm = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit}>
        <MyFormInput
          name="email"
          label="We’ve sent a password reset to you email"
          placeholder="Enter Your Email"
        />
        <MyBtn name="Log In" width="w-full" />
      </MyFormWrapper>
    </div>
  );
};

export default EmailSenderForm;
