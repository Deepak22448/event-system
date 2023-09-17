"use client";

import React, { FormEvent, createRef, useState } from "react";
import Input from "./Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormValues {
  name: string;
  email: string;
  password: string;
}
const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const handleRegister = async ({ password, name, email }: IFormValues) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        cache: "no-cache",
      });

      if (!res.ok) {
        const error = await res.json();
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: error.message,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form
      className="w-full px-10 space-y-4"
      onSubmit={handleSubmit(handleRegister)}
    >
      <h1 className="text-center text-xl md:text-3xl">Create an account Now</h1>
      <Input
        key="name"
        name="name"
        type="name"
        id="name"
        label="Name"
        iconPath="/icons/user.svg"
        register={register}
        isRequired
        error={errors.name?.message}
      />
      <Input
        key="email"
        name="email"
        type="email"
        id="email"
        label="Email"
        iconPath="/icons/email.svg"
        register={register}
        isRequired
        error={errors.email?.message}
      />
      <Input
        key="password"
        name="password"
        type="password"
        id="password"
        label="Password"
        iconPath="/icons/lock.svg"
        register={register}
        error={errors.password?.message}
        isRequired
      />
      <button
        className="uppercase bg-orange-400 rounded font-semibold tracking-wider w-full py-4 hover:bg-orange-300"
        type="submit"
      >
        REGISTER
      </button>
      <p className="text-center">
        All ready have an account ?{" "}
        <Link href="/login" className="underline text-orange-300">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
