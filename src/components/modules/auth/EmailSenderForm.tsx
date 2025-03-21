/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { useSendOtpMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EmailSenderForm = () => {
  const [sendMail] = useSendOtpMutation();
  const router = useRouter()

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Sending OTP...");
    console.log(data);

    try {
      const res: any = await sendMail(data);
      if (res.data) {
        toast.success("OTP send Successfully", { id: toastId });

        router.push('/forget-password/verify-otp')
      } else {
        toast.error(res?.error?.data?.message || "Failed to send", {
          id: toastId,
        });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to send");
    }
  };

  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit}>
        <MyFormInput
          name="email"
          type="email"
          label="We’ve sent a password reset to you email"
          placeholder="Enter Your Email"
        />
        <MyBtn name="Submit" width="w-full" />
      </MyFormWrapper>
    </div>
  );
};

export default EmailSenderForm;
