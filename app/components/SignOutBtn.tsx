"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutBtn = () => {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "/login",
          redirect: true,
        })
      }
      className="hover:text-orange-300"
    >
      Logout
    </button>
  );
};

export default SignOutBtn;
