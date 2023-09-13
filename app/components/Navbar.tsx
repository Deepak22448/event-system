import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="h-16 flex items-center  px-4 text-gray-400 backdrop-blur-md sticky top-0  border-b border-b-gray-400">
      <nav className="flex w-full justify-between">
        <Link href="/" className="text-2xl text-gray-100 font-extrabold">
          EventTiz
        </Link>

        <ul className="flex gap-8 items-center">
          <Link href="/login" className="hover:text-gray-100">
            <li>Login</li>
          </Link>
          <Link href="/register" className="hover:text-gray-100">
            <li>Register</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
