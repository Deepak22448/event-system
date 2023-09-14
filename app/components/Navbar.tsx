import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="h-16 flex w-full  items-center  px-4 text-orange-400 backdrop-blur-md fixed z-10 top-0  border-b border-b-orange-300">
      <nav className="flex w-full justify-between">
        <Link href="/" className="text-2xl text-orange-500 font-extrabold">
          EventTiz
        </Link>

        <ul className="flex gap-8 items-center">
          <Link href="/login" className="hover:text-orange-300">
            <li>Login</li>
          </Link>
          <Link href="/register" className="hover:text-orange-300">
            <li>Register</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
