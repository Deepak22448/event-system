import Image from "next/image";
import React from "react";
import Input from "./components/Input";
import Link from "next/link";

const Register = () => {
  return (
    <section className="h-screen md:flex">
      <article className="md:w-3/5 flex justify-center items-center h-full">
        <form className="w-full px-10 space-y-4">
          <h1 className="text-center text-3xl">Create an account Now</h1>
          <Input
            name="email"
            type="email"
            id="email"
            label="Email"
            iconPath="/icons/email.svg"
          />
          <Input
            name="password"
            type="password"
            id="password"
            label="Password"
            iconPath="/icons/lock.svg"
          />
          <button className="uppercase bg-orange-400 rounded font-semibold tracking-wider w-full py-4 hover:bg-orange-300">
            REGISTER
          </button>
          <p className="text-center">
            All ready have an account ?{" "}
            <Link href="/login" className="underline text-orange-300">
              Sign in
            </Link>
          </p>
        </form>
      </article>

      <figure className="relative hidden md:w-2/5 md:block h-full">
        <Image
          src="/images/register-bg.jpg"
          alt="people in sitting"
          fill
          className="absolute inset-0 object-cover"
        />
      </figure>
    </section>
  );
};

export default Register;
