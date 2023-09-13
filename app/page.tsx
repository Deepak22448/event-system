import React from "react";
import Navbar from "./components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <section className="home h-screen min-w-full backdrop-blur-sm bg-transparent">
      <Navbar />

      <div className="flex justify-center items-center h-full text-gray-100 px-5 text-lg md:text-xl">
        <div className="space-y-4 md:text-center">
          <h2 className="text-2xl md:text-5xl font-bold tracking-wide text-white capitalize">
            Get ready to experience{" "}
            <span className="text-orange-400 ">memorable events</span>
          </h2>
          <p>
            Book your tickets to the hottest shows, concerts, and festivals
            around. From electrifying music concerts to action-packed sporting
            events, we&lsquo;ve got you covered.
          </p>
          <p>Don&lsquo;t miss out on the memories - grab your tickets now!</p>
          <Link href="/register" className="block">
            <button className="p-4 bg-white text-orange-400 font-bold rounded">
              CREATE YOUR EVENT TICKETS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
