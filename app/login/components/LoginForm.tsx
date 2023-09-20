"use client";

import { CREDENTIALS_PROVIDER_NAME } from "@/app/api/auth/[...nextauth]/authOptions";
import Input from "@/app/register/components/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const router = useRouter();

  const handleLogin = async ({ email, password }: IFormValues) => {
    try {
      const response = await signIn(CREDENTIALS_PROVIDER_NAME.toLowerCase(), {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        const errorMessage = response.error;
        throw new Error(errorMessage);
      }
      router.push("/sample");
    } catch (error: any) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
        toastId: `login${error.message}`,
      });
    }
  };

  return (
    <form
      className="w-full px-10 space-y-4"
      onSubmit={handleSubmit(handleLogin)}
    >
      <h1 className="text-center text-xl md:text-3xl">
        Login into your account
      </h1>

      <Input
        register={register}
        name="email"
        type="email"
        id="email"
        label="Email"
        iconPath="/icons/email.svg"
        error={errors.email?.message}
        isRequired
      />
      <Input
        register={register}
        name="password"
        type="password"
        id="password"
        label="Password"
        iconPath="/icons/lock.svg"
        error={errors.password?.message}
        isRequired
      />
      <button
        className="uppercase bg-orange-400 rounded font-semibold tracking-wider w-full py-4 hover:bg-orange-300"
        type="submit"
      >
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
