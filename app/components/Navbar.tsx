import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import SignOutBtn from "./SignOutBtn";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="h-16 flex w-full  items-center  px-4 text-orange-400 backdrop-blur-md fixed z-10 top-0  border-b border-b-orange-300">
      <nav className="flex w-full justify-between">
        <Link href="/" className="text-2xl text-orange-500 font-extrabold">
          EventTiz
        </Link>

        <ul className="flex gap-8 items-center">
          {session ? (
            <>
              <li className="hover:text-orange-300">{session.user.name}</li>
              <SignOutBtn />
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-orange-300">
                <li>Login</li>
              </Link>
              <Link href="/register" className="hover:text-orange-300">
                <li>Register</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
