'use client'
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { FieldValues } from "react-hook-form";

const VerifyOtpForm = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit}>
        <MyFormInput
          name="opt"
          label="Enter you OTP for varification"
          placeholder="Enter Your OTP"
        />
        <MyBtn name="Verify" width="w-full" />
      </MyFormWrapper>
    </div>
  );
};

export default VerifyOtpForm;
