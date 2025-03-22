/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  useResetPasswordMutation,
  useVerifyOtpMutation,
} from "@/redux/features/auth/authApi";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const VerifyOtpForm = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [verifyOtp] = useVerifyOtpMutation();
  const [changePass] = useResetPasswordMutation();

  // handle verify otp
  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Verifying OTP...");

    const otp = parseInt(data.otp, 10);

    if (isNaN(otp) || otp <= 1) {
      toast.error("Please enter a valid OTP", {
        id: toastId,
      });
      return;
    }

    const verifyData = {
      email: data.email,
      otp,
    };

    try {
      const res: any = await verifyOtp(verifyData);
      if (res.data) {
        toast.success("OTP send Successfully", { id: toastId });

        setEmail(data.email);
      } else {
        toast.error(res?.error?.data?.message || "Failed to Verify", {
          id: toastId,
        });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to Verify");
    }
  };

  // handle change pass
  const handlePassChange = async (data: FieldValues) => {
    const toastId = toast.loading("Changing Password...");
    console.log(data);

    if (data?.newPassword !== data.confirmPassword) {
      toast.error("Confirm password di not match", { id: toastId });
      return;
    }

    const changedData = {
      email: email,
      password: data.confirmPassword,
    };

    try {
      const res: any = await changePass(changedData);
      if (res.data) {
        toast.success("Password changed Successfully", { id: toastId });

        setEmail(data.email);
      } else {
        toast.error(res?.error?.data?.message || "Failed to changed", {
          id: toastId,
        });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to changed");
    }
  };

  return (
    <div>
      {email ? (
        <div>
          <MyFormWrapper onSubmit={handlePassChange}>
            <MyFormInput
              name="newPassword"
              label="New Password"
              type="password"
              placeholder="Enter Your Password"
            />

            <MyFormInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Enter Your Password Again"
            />

            <MyBtn name="Log In" width="w-full" />
          </MyFormWrapper>
        </div>
      ) : (
        <div>
          <MyFormWrapper onSubmit={handleSubmit}>
            <MyFormInput
              name="email"
              label="Enter you email"
              placeholder="Enter Your OTP"
            />
            <MyFormInput
              name="otp"
              label="Enter you OTP for varification"
              placeholder="Enter Your OTP"
            />
            <MyBtn name="Verify" width="w-full" />
          </MyFormWrapper>
        </div>
      )}
    </div>
  );
};

export default VerifyOtpForm;
