/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBtn from "@/components/common/MyBtn";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setCookie } from "@/utils/cookies";
import { varifyToken } from "@/utils/verifyToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (data: FieldValues) => {

    const toastId = toast.loading("login...");

    try {
      const res = await login(data).unwrap();
      const user = varifyToken(res.data.token) as TUser;

      if (user?.role !== "SUPER_ADMIN") {
        return toast.error("Unauthorize Access", { id: toastId });
      } else {
        setCookie(res.data.token);
        dispatch(setUser({ user, token: res.data.token }));

        toast.success("Login success", { id: toastId });

        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to login", { id: toastId });
    }
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
          <button type="button" className="text-primary mb-5">Forget password?</button>
        </Link>

        <MyBtn name="Log In" width="w-full" />
        
      </MyFormWrapper>
    </div>
  );
};

export default LoginForm;
