import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getProviders } from "next-auth/react";
import OAuthLoginButtons from "./components/OAuthLoginButtons";
import Hr from "./components/Hr";
import LoginForm from "./components/LoginForm";

const Register = async () => {
  const authProviders = await getProviders();

  return (
    <section className="h-screen md:flex">
      <article className="md:w-3/5 flex justify-center items-center h-full flex-col space-y-4">
        <LoginForm />
        <p className="text-center">
          All ready have an account ?{" "}
          <Link href="/register" className="underline text-orange-300">
            Register
          </Link>
        </p>
        <Hr />
        <OAuthLoginButtons providers={authProviders} />
      </article>

      <figure className="relative hidden md:w-2/5 md:block h-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="people in sitting"
          fill
          className="absolute inset-0 object-cover"
        />
      </figure>
    </section>
  );
};

export default Register;
