import React from "react";
import CreateEventForm from "./components/CreateEventForm";
import Link from "next/link";

const CreateEvent = () => {
  return (
    <section className="min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="my-4 text-center font-bold text-xl ">
          Create a new Event
        </h1>
        <Link
          href="/dashboard"
          className="h-10 aspect-square bg-orange-400 rounded-full flex justify-center items-center text-white text-xl"
        >
          X
        </Link>
      </div>
      <CreateEventForm />
    </section>
  );
};

export default CreateEvent;
